// shims/runtimeobject-renderer.ts
var gdjs;
((gdjs2) => {
  const mockRendererObject = Object.freeze({ visible: true });
  class RuntimeObjectRenderer {
    getRendererObject() {
      return mockRendererObject;
    }
    ensureUpToDate() {
    }
    update() {
    }
  }
  gdjs2.RuntimeObjectRenderer = RuntimeObjectRenderer;
})(gdjs || (gdjs = {}));
