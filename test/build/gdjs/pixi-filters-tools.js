// shims/pixi-renderers/pixi-filters-tools.ts
var gdjs;
((gdjs2) => {
  let PixiFiltersTools;
  ((PixiFiltersTools2) => {
    PixiFiltersTools2.clampValue = function(value, min, max) {
      return Math.max(min, Math.min(max, value));
    };
    PixiFiltersTools2.clampKernelSize = function(value, min, max) {
      const len = Math.round((max - min) / 2 + 1);
      const arr = new Array(len);
      for (let i = 0; i < len; i++) {
        arr[i] = min + 2 * i;
      }
      return arr.indexOf(value) !== -1 ? value : min;
    };
    PixiFiltersTools2.enableEffect = function(filter, value) {
    };
    PixiFiltersTools2.isEffectEnabled = function(filter) {
      return false;
    };
    PixiFiltersTools2.getFilterCreator = function(filterName) {
      return null;
    };
    PixiFiltersTools2.registerFilterCreator = function(filterName, filterCreator) {
    };
    PixiFiltersTools2.rgbOrHexToHexNumber = function(value) {
      const splitValue = value.split(";");
      if (splitValue.length === 3) {
        return gdjs2.rgbToHexNumber(parseInt(splitValue[0], 10), parseInt(splitValue[1], 10), parseInt(splitValue[2], 10));
      }
      return parseInt(value.replace("#", "0x"), 16);
    };
  })(PixiFiltersTools = gdjs2.PixiFiltersTools || (gdjs2.PixiFiltersTools = {}));
})(gdjs || (gdjs = {}));
