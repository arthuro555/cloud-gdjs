var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// runtime-lib/index.ts
import { createContext, runInContext } from "vm";
import { readFile } from "fs/promises";
var imageSizes = JSON.parse((await readFile(__dirname + "/image_sizes.json")).toString());
var window = (() => {
  const window2 = {
    setTimeout,
    setInterval,
    navigator: {},
    imageSizes,
    require: __require
  };
  window2.window = window2;
  window2.self = window2;
  return createContext(window2);
})();
var includesList = JSON.parse((await readFile(__dirname + "/includes.json")).toString());
var includeFiles = await Promise.all(includesList.map((file) => readFile(__dirname + "/../gdjs/" + file)));
for (const fileNumber in includeFiles)
  runInContext(includeFiles[fileNumber].toString(), window, {
    filename: includesList[fileNumber]
  });
var runtimeGame = runInContext("new gdjs.RuntimeGame(gdjs.projectData, {})", window, { filename: "run.js" });
var switchToScene = (sceneName) => runtimeGame.getSceneStack().replace(sceneName, true);
var startGameLoop = () => {
  let lastCallTime = Date.now();
  return function step() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;
    lastCallTime = currentTime;
    runtimeGame.getSceneStack().step(elapsedTime);
  };
};
export {
  runtimeGame,
  startGameLoop,
  switchToScene
};
