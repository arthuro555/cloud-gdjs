// shims/pixi-renderers/spriteruntimeobject-pixi-renderer.ts
var gdjs;
((gdjs2) => {
  class SpriteRuntimeObjectRenderer extends gdjs2.RuntimeObjectRenderer {
    constructor(owner) {
      super();
      this.color = "0;0;0";
      this.owner = owner;
    }
    static getAnimationFrame(_, imageName) {
      return imageSizes[imageName];
    }
    static getAnimationFrameWidth(image) {
      return image.width;
    }
    static getAnimationFrameHeight(image) {
      return image.height;
    }
    updateFrame() {
    }
    updateAngle() {
    }
    updateOpacity() {
    }
    updateVisibility() {
    }
    updateX() {
    }
    updateY() {
    }
    _updatePIXISprite() {
    }
    getColor() {
      return this.color;
    }
    getHeight() {
      return this.getUnscaledHeight() * this.owner.getScaleY();
    }
    getWidth() {
      return this.getUnscaledWidth() * this.owner.getScaleX();
    }
    getUnscaledWidth() {
      return imageSizes[this.owner.getAnimationFrame()].width;
    }
    getUnscaledHeight() {
      return imageSizes[this.owner.getAnimationFrame()].height;
    }
    reinitialize(runtimeObject, runtimeScene) {
    }
    setColor(rgbColor) {
      this.color = rgbColor;
    }
  }
  gdjs2.SpriteRuntimeObjectRenderer = SpriteRuntimeObjectRenderer;
})(gdjs || (gdjs = {}));
