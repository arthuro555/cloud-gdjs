namespace gdjs {
  export namespace PixiFiltersTools {
    export const clampValue = function (value, min, max) {
      return Math.max(min, Math.min(max, value));
    };
    export const clampKernelSize = function (value, min, max) {
      const len = Math.round((max - min) / 2 + 1);
      const arr = new Array(len);
      for (let i = 0; i < len; i++) {
        arr[i] = min + 2 * i;
      }
      return arr.indexOf(value) !== -1 ? value : min;
    };
    export const enableEffect = function (filter: any, value: boolean) {};
    export const isEffectEnabled = function (filter: any): boolean {
      return false;
    };
    export const getFilterCreator = function (filterName: string): null {
      return null;
    };
    export const registerFilterCreator = function (
      filterName: string,
      filterCreator: any
    ) {};

    export const rgbOrHexToHexNumber = function (value: string): number {
      const splitValue = value.split(";");
      if (splitValue.length === 3) {
        //@ts-ignore
        return gdjs.rgbToHexNumber(
          parseInt(splitValue[0], 10),
          parseInt(splitValue[1], 10),
          parseInt(splitValue[2], 10)
        );
      }
      return parseInt(value.replace("#", "0x"), 16);
    };
  }
}
