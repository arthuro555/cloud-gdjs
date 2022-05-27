export const makeTemplatePackageJSON = () => ({
  name: "cloud-gdjs",
  version: "1.0.0",
  main: "lib/index.js",
  type: "module",
  scripts: {
    start: "node ./lib/run.js",
  },
});
