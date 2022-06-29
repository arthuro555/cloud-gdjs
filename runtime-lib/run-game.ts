import { createContext, runInContext } from "vm";
import { readFile } from "fs/promises";

const imageSizes = JSON.parse(
  (await readFile(__dirname + "/image_sizes.json")).toString()
);

const window = (() => {
  const window: any = {
    setTimeout: setTimeout,
    setInterval: setInterval,
    navigator: {},
    imageSizes,
    require,
    console,
  };
  window.window = window;
  window.self = window;
  return createContext(window, { name: "GDJS Context" });
})();

const includesList = JSON.parse(
  (await readFile(__dirname + "/includes.json")).toString()
);
const includeFiles = await Promise.all<Buffer>(
  includesList.map((file) => readFile(__dirname + "/../gdjs/" + file))
);
for (const fileNumber in includeFiles)
  runInContext(includeFiles[fileNumber].toString(), window, {
    filename: includesList[fileNumber],
  });

export const runtimeGame: gdjs.RuntimeGame = runInContext(
  "new gdjs.RuntimeGame(gdjs.projectData, {})",
  window,
  { filename: "run.js" }
);

// Simplified game loop, without any of the rendering, user inputs or frame limiting
export const startGameLoop = (initialScene?: string): (() => void) => {
  if (!runtimeGame.hasScene()) {
    console.error("This game has no scenes!");
    process.exit(1);
  }

  // Push the first scene on the stack
  runtimeGame
    .getSceneStack()
    .push(
      initialScene ||
        runtimeGame.getGameData().firstLayout ||
        runtimeGame.getSceneData().name
    );

  let lastCallTime = Date.now();
  return function step() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;
    lastCallTime = currentTime;
    runtimeGame.getSceneStack().step(elapsedTime);
  };
};
