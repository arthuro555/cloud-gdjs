# cloud-gdjs

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X412YWU)

A mod for GDevelop web exports for them to run in node, lightweightly without any rendering or polyfilling (no PIXI, DOM, Howler...) 🧙‍♂️

This is in a highly experimental state:

- Do not use this for production games
- Do not expect it to work Out of the Box
- Please share feedback: If something doesn't work with your game, open an issue 😉

## How do I try it?

Make sure you've installed the latest LTS release of NodeJS 16.  
Open a terminal, go into your GDevelop project folder and simply run:

```sh
npx cloud-gdjs
```

## Roadmap

- [x] Runs the Not-A-Vania example's scenes without crashing
- [x] Runs without a trace of PIXI, DOM or other rendering related APIs, and without images
- [x] Pre-generates mappings to the resources original sizes to not break logic depending on the image's sizes
- [x] Script that can export a GDevelop web export to a server
- [ ] Works with extensions that use node modules
- [ ] Shims GDevelop renderers for all objects
- [ ] Special shims that allow to trigger a callback when a visual property of objects is modified
- [x] CLI that can export a GDevelop project file to a server
- [ ] T.H.N.K. Framework support
