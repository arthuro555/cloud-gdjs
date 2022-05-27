import { readFile, writeFile, copyFile, mkdir, rm } from "fs/promises";
import { makeTemplatePackageJSON } from "../runtime-lib/template-package";
import { basename, normalize } from "path";
import { argv } from "process";
import sharp from "sharp";

const INPUT: string = `${normalize(argv[2])}/` || "./project/";
const OUTPUT: string = `${normalize(argv[3])}/` || "./cloud-server/";
const OUTPUT_GDJS: string = OUTPUT + "gdjs/";
const OUTPUT_LIB: string = OUTPUT + "lib/";
const ROOT = __dirname + "/../";
const SHIMS = ROOT + "shims/";
const RUNTIME_LIBRARY = ROOT + "runtime-lib/";

try {
  await rm(OUTPUT, { recursive: true });
} catch {}

try {
  await mkdir(OUTPUT);
  await mkdir(OUTPUT_GDJS);
  await mkdir(OUTPUT_LIB);

  // Gather all included files
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
  // Write includes files list
  await writeFile(OUTPUT_LIB + "includes.json", JSON.stringify(includeNames));
  // And the files themselves
  await Promise.all(
    includes.map((file, index) =>
      copyFile(file, OUTPUT_GDJS + includeNames[index])
    )
  );
  // Patch the RuntimeGame step method to remove rendering
  await writeFile(
    OUTPUT_GDJS + "runtimescene.js",
    (await readFile(OUTPUT_GDJS + "runtimescene.js"))
      .toString()
      .replace("this._updateObjectsPreRender()", "0")
      .replace("this._updateLayersPreRender()", "0")
      .replace("this.render()", "0")
  );
  // Finally copy the runtime scripts
  await copyFile(RUNTIME_LIBRARY + "run.js", OUTPUT_LIB + "run.js");
  await copyFile(RUNTIME_LIBRARY + "index.js", OUTPUT_LIB + "index.js");
  await writeFile(
    OUTPUT + "package.json",
    JSON.stringify(makeTemplatePackageJSON())
  );

  // Read the size of all pictures to use as default object size, since it is normally the job of the renderer.
  const dataJs = (await readFile(INPUT + "data.js")).toString();
  const projectData = eval(
    `(${dataJs.split("\n")[0].slice(19, -1)})`
  ) as ProjectData;
  const imageSizes: Awaited<ReturnType<typeof loadImageSize>>[] = (
    await Promise.all(
      projectData.resources.resources.map((resource) =>
        resource.kind === "image"
          ? loadImageSize(resource.name)
          : Promise.resolve(null)
      )
    )
  ).filter(Boolean);
  writeFile(
    OUTPUT_LIB + "image_sizes.json",
    JSON.stringify(
      imageSizes.reduce(
        (acc, { file, width, height }) => (
          (acc[file] = { width, height }), acc
        ),
        {}
      )
    )
  );
} catch (e) {
  console.log(e);
}

async function loadImageSize(file: string) {
  const { width, height }: { width: number; height: number } = await sharp(
    INPUT + file
  ).metadata();
  return { file, width, height };
}

function shouldRemoveFile(file: string) {
  if (file === "pixi-renderers/pixi.js") return true;
  if (file === "Extensions/TileMap/pixi-tilemap/dist/pixi-tilemap.umd.js")
    return true;
  if (file === "Extensions/TileMap/pixi-tilemap-helper.js") return true;
  if (file === "howler-sound-manager/howler.min.js") return true;
  if (file.includes("Effects")) return true;
  return false;
}

function shouldShimFile(file: string) {
  if (file.includes("pixi")) return true;
  if (file.includes("howler")) return true;
  return false;
}
