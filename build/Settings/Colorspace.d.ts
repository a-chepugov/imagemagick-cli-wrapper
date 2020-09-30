import Setting from "./_Setting";
export declare enum Type {
    CMY = "CMY",
    CMYK = "CMYK",
    Gray = "Gray",
    HCL = "HCL",
    HCLp = "HCLp",
    HSB = "HSB",
    HSI = "HSI",
    HSL = "HSL",
    HSV = "HSV",
    HWB = "HWB",
    Jzazbz = "Jzazbz",
    Lab = "Lab",
    LCHab = "LCHab",
    LCHuv = "LCHuv",
    LMS = "LMS",
    Log = "Log",
    Luv = "Luv",
    OHTA = "OHTA",
    Rec601YCbCr = "Rec601YCbCr",
    Rec709YCbCr = "Rec709YCbCr",
    RGB = "RGB",
    scRGB = "scRGB",
    sRGB = "sRGB",
    Transparent = "Transparent",
    xyY = "xyY",
    XYZ = "XYZ",
    YCbCr = "YCbCr",
    YCC = "YCC",
    YDbDr = "YDbDr",
    YIQ = "YIQ",
    YPbPr = "YPbPr",
    YUV = "YUV",
    Undefined = "Undefined"
}
export declare class Colorspace implements Setting {
    private readonly value;
    constructor(value: Type);
    build(): string[];
    inspect(): string;
}
export default Colorspace;
