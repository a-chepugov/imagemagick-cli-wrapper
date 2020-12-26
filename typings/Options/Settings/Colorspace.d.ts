export default Colorspace;
export type Type = string;
export namespace Type {
    const CMY: string;
    const CMYK: string;
    const Gray: string;
    const HCL: string;
    const HCLp: string;
    const HSB: string;
    const HSI: string;
    const HSL: string;
    const HSV: string;
    const HWB: string;
    const Jzazbz: string;
    const Lab: string;
    const LCHab: string;
    const LCHuv: string;
    const LMS: string;
    const Log: string;
    const Luv: string;
    const OHTA: string;
    const Rec601YCbCr: string;
    const Rec709YCbCr: string;
    const RGB: string;
    const scRGB: string;
    const sRGB: string;
    const Transparent: string;
    const xyY: string;
    const XYZ: string;
    const YCbCr: string;
    const YCC: string;
    const YDbDr: string;
    const YIQ: string;
    const YPbPr: string;
    const YUV: string;
    const Undefined: string;
}
/**
 * @implements {Setting}
 */
export class Colorspace implements Setting {
    /**
     * @param {Type} value
     */
    constructor(value: Type);
    value: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
