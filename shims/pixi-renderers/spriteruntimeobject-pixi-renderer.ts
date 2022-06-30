namespace gdjs {
  type Image = { width: number; height: number };
  declare const imageSizes: Record<string, Image>;

  export class SpriteRuntimeObjectRenderer
    extends gdjs.RuntimeObjectRenderer
    implements gdjs.SpriteRuntimeObjectPixiRenderer
  {
    private color: string = "0;0;0";
    private owner: gdjs.SpriteRuntimeObject;
    constructor(owner: gdjs.SpriteRuntimeObject) {
      super();
      this.owner = owner;
    }

    static getAnimationFrame(_: never, imageName: string): Image {
      return imageSizes[imageName];
    }

    static getAnimationFrameWidth(image: Image): number {
      return image.width;
    }

    static getAnimationFrameHeight(image: Image): number {
      return image.height;
    }

    updateFrame() {}
    updateAngle(): void {}
    updateOpacity(): void {}
    updateVisibility(): void {}
    updateX(): void {}
    updateY(): void {}
    _updatePIXISprite(): void {}

    getColor(): string {
      return this.color;
    }
    getHeight(): number {
      return this.getUnscaledHeight() * this.owner.getScaleY();
    }
    getWidth(): number {
      return this.getUnscaledWidth() * this.owner.getScaleX();
    }
    getUnscaledWidth(): number {
      return !!this.owner._animationFrame
        ? imageSizes[this.owner._animationFrame.image].width
        : 0;
    }
    getUnscaledHeight(): number {
      return !!this.owner._animationFrame
        ? imageSizes[this.owner._animationFrame.image].height
        : 0;
    }

    reinitialize(
      runtimeObject: gdjs.SpriteRuntimeObject,
      runtimeScene: gdjs.RuntimeScene
    ): void {}

    setColor(rgbColor: any): void {
      this.color = rgbColor;
    }
  }
}
