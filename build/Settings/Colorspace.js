"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colorspace = exports.Type = void 0;
var Type;
(function (Type) {
    Type["CMY"] = "CMY";
    Type["CMYK"] = "CMYK";
    Type["Gray"] = "Gray";
    Type["HCL"] = "HCL";
    Type["HCLp"] = "HCLp";
    Type["HSB"] = "HSB";
    Type["HSI"] = "HSI";
    Type["HSL"] = "HSL";
    Type["HSV"] = "HSV";
    Type["HWB"] = "HWB";
    Type["Jzazbz"] = "Jzazbz";
    Type["Lab"] = "Lab";
    Type["LCHab"] = "LCHab";
    Type["LCHuv"] = "LCHuv";
    Type["LMS"] = "LMS";
    Type["Log"] = "Log";
    Type["Luv"] = "Luv";
    Type["OHTA"] = "OHTA";
    Type["Rec601YCbCr"] = "Rec601YCbCr";
    Type["Rec709YCbCr"] = "Rec709YCbCr";
    Type["RGB"] = "RGB";
    Type["scRGB"] = "scRGB";
    Type["sRGB"] = "sRGB";
    Type["Transparent"] = "Transparent";
    Type["xyY"] = "xyY";
    Type["XYZ"] = "XYZ";
    Type["YCbCr"] = "YCbCr";
    Type["YCC"] = "YCC";
    Type["YDbDr"] = "YDbDr";
    Type["YIQ"] = "YIQ";
    Type["YPbPr"] = "YPbPr";
    Type["YUV"] = "YUV";
    Type["Undefined"] = "Undefined";
})(Type = exports.Type || (exports.Type = {}));
class Colorspace {
    constructor(value) {
        this.value = value;
    }
    build() {
        return ['-colorspace', this.value];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Colorspace = Colorspace;
exports.default = Colorspace;
//# sourceMappingURL=Colorspace.js.map