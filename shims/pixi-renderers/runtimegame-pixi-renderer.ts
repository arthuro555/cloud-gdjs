namespace gdjs {
  export class RuntimeGameRenderer {
    setWindowTitle() {}
    updateRendererSize() {}
    startGameLoop(t) {
      let e = 0;
      const n = (r) => {
        this._nextFrameId = requestAnimationFrame(n, 10);
        const o = e ? r - e : 0;
        (e = r), t(o) || cancelAnimationFrame(this._nextFrameId);
      };
      requestAnimationFrame(n);
    }
  }
}
