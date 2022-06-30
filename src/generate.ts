import { readFile, writeFile, copyFile, mkdir, rm } from "fs/promises";
import { makeTemplatePackageJSON } from "./template-package";
import { basename, normalize } from "path";
import sharp from "sharp";

const ROOT = __dirname + "/../";
const SHIMS = ROOT + "shims/";
const RUNTIME_LIBRARY = ROOT + "runtime-lib/";

export async function generateFromHTMLExport(
  pathToExport: string,
  pathToOutputFolder: string,
  runner: Runner = "basic"
) {
  const INPUT = `${normalize(pathToExport)}/`;
  const OUTPUT = `${normalize(pathToOutputFolder)}/`;
  const OUTPUT_GDJS = OUTPUT + "gdjs/";
  const OUTPUT_LIB = OUTPUT + "lib/";
  const RUNNER = RUNTIME_LIBRARY + `runners/${runner}.js`;

  async function loadImageSize(file: string) {
    const { width, height } = await sharp(INPUT + file).metadata();
    return { file, width: width || 0, height: height || 0 };
  }

  await Promise.all([
    mkdir(OUTPUT_GDJS, { recursive: true }),
    mkdir(OUTPUT_LIB, { recursive: true }),
  ]);

  const pendingTasks: Promise<void>[] = [];

  // Gather all included files
  pendingTasks.push(
    (async () => {
      function shouldRemoveFile(file: string) {
        const normalizedFile = file.replace(/\\/g, "/");
        if (
          normalizedFile === "pixi-renderers/pixi.js" ||
          normalizedFile ===
            "Extensions/TileMap/pixi-tilemap/dist/pixi-tilemap.umd.js" ||
          normalizedFile === "Extensions/TileMap/pixi-tilemap-helper.js" ||
          normalizedFile === "howler-sound-manager/howler.min.js" ||
          normalizedFile.includes("Effects")
        )
          return true;
        return false;
      }

      function shouldShimFile(file: string) {
        if (file.includes("pixi")) return true;
        if (file.includes("howler")) return true;
        return false;
      }

      const includes = [SHIMS + "runtimeobject-renderer.js"];
      for (const match of (await readFile(INPUT + "index.html"))
        .toString()
        .matchAll(/<script src="(.*\.js)" cross/gm)) {
        const includeFile = match[1];
        if (shouldRemoveFile(includeFile)) {
          console.log(`Deleting ${includeFile}`);
          continue;
        }
        if (shouldShimFile(includeFile)) {
          console.log(`Patching ${includeFile}`);
          includes.push(SHIMS + includeFile);
        } else includes.push(INPUT + includeFile);
      }

      const includeNames = includes.map((fullName) => basename(fullName));

      await Promise.all([
        // Write includes files list...
        writeFile(OUTPUT_LIB + "includes.json", JSON.stringify(includeNames)),
        // And the files themselves
        ...includes.map((file, index) =>
          copyFile(file, OUTPUT_GDJS + includeNames[index])
        ),
      ]);

      // Patch the RuntimeGame step method to remove rendering
      await writeFile(
        OUTPUT_GDJS + "runtimescene.js",
        (await readFile(OUTPUT_GDJS + "runtimescene.js"))
          .toString()
          .replace("this._updateObjectsPreRender()", "0")
          .replace("this._updateLayersPreRender()", "0")
          .replace("this.render()", "0")
      );
    })()
  );

  // Copy the runner files
  pendingTasks.push(
    copyFile(RUNNER, OUTPUT_LIB + "run.js"),
    writeFile(
      OUTPUT + "package.json",
      JSON.stringify(makeTemplatePackageJSON())
    )
  );

  // Read the size of all pictures to use as default object size, since it is normally the job of the renderer.
  pendingTasks.push(
    (async () => {
      const dataJs = (await readFile(INPUT + "data.js")).toString();
      const projectData = eval(
        `(${dataJs.split("\n")[0].slice(19, -1)})`
      ) as ProjectData;
      const imageSizes: Awaited<ReturnType<typeof loadImageSize>>[] =
        await Promise.all(
          projectData.resources.resources
            .filter((resource) => resource.kind === "image")
            .map(({ name }) => loadImageSize(name))
        );

      await writeFile(
        OUTPUT_LIB + "image_sizes.json",
        JSON.stringify(
          imageSizes.reduce(
            (acc, { file, width, height }) => (
              (acc[file] = { width, height }), acc
            ),
            {} as Record<string, { width: number; height: number }>
          )
        )
      );
    })()
  );

  // Await for all parallel tasks to have finished
  await Promise.all(pendingTasks);
}
