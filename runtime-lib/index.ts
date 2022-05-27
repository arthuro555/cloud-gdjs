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
  };
  window.window = window;
  window.self = window;
  return createContext(window);
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

export const switchToScene = (sceneName: string) =>
  runtimeGame.getSceneStack().replace(sceneName, true);

// Simplified game loop, without any of the rendering
export const startGameLoop = () => {
  let lastCallTime = Date.now();
  return function step() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;
    lastCallTime = currentTime;
    runtimeGame.getSceneStack().step(elapsedTime);
  };
};
