namespace gdjs {
  const mockRendererObject = Object.freeze({ visible: true });
  export class RuntimeObjectRenderer {
    getRendererObject() {
      return mockRendererObject;
    }

    ensureUpToDate() {}
    update() {}

    updatePosition() {}
    updateX() {}
    updateY() {}
    updateOpacity() {}
    updateVisibility() {}
    updateAngle() {}
    updateWidth() {}
    updateHeight() {}

    getWidth() {
      return 0;
    }
    getHeight() {
      return 0;
    }
    setWidth() {}
    setHeight() {}
  }
}
