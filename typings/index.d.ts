export var Input: typeof import("./Input");
export var Settings: typeof import("./Options/Settings");
export var Operators: typeof import("./Options/Operators");
export var ChannelOperators: typeof import("./Options/ChannelOperators");
export var SequenceOperators: typeof import("./Options/SequenceOperators");
export var StacksOperations: typeof import("./Options/StacksOperations");
export var Output: typeof import("./Output");
export var Options: typeof import("./Options/Options").Options;
export var FORMATS: {
    '3FR': string;
    AAI: string;
    AI: string;
    ART: string;
    ARW: string;
    AVI: string;
    AVS: string;
    BGR: string;
    BGRA: string;
    BGRO: string;
    BIE: string;
    BMP: string;
    BMP2: string;
    BMP3: string;
    BRF: string;
    CAL: string;
    CALS: string;
    CANVAS: string;
    CAPTION: string;
    CIN: string;
    CIP: string;
    CLIP: string;
    CMYK: string;
    CMYKA: string;
    CR2: string;
    CRW: string;
    CUR: string;
    CUT: string;
    DATA: string;
    DCM: string;
    DCR: string;
    DCX: string;
    DDS: string;
    DFONT: string;
    DJVU: string;
    DNG: string;
    DOT: string;
    DPX: string;
    DXT1: string;
    DXT5: string;
    EPDF: string;
    EPI: string;
    EPS: string;
    EPS2: string;
    EPS3: string;
    EPSF: string;
    EPSI: string;
    EPT: string;
    EPT2: string;
    EPT3: string;
    ERF: string;
    EXR: string;
    FAX: string;
    FILE: string;
    FITS: string;
    FRACTAL: string;
    FTP: string;
    FTS: string;
    G3: string;
    G4: string;
    GIF: string;
    GIF87: string;
    GRADIENT: string;
    GRAY: string;
    GROUP4: string;
    GV: string;
    H: string;
    HALD: string;
    HDR: string;
    HISTOGRAM: string;
    HRZ: string;
    HTM: string;
    HTML: string;
    HTTP: string;
    HTTPS: string;
    ICB: string;
    ICO: string;
    ICON: string;
    IIQ: string;
    INFO: string;
    INLINE: string;
    IPL: string;
    ISOBRL: string;
    ISOBRL6: string;
    JBG: string;
    JBIG: string;
    JNG: string;
    JNX: string;
    JPE: string;
    JPEG: string;
    JPG: string;
    JPS: string;
    JSON: string;
    K25: string;
    KDC: string;
    LABEL: string;
    M2V: string;
    M4V: string;
    MAC: string;
    MAGICK: string;
    MAP: string;
    MASK: string;
    MAT: string;
    MATTE: string;
    MEF: string;
    MIFF: string;
    MKV: string;
    MNG: string;
    MONO: string;
    MOV: string;
    MP4: string;
    MPC: string;
    MPEG: string;
    MPG: string;
    MRW: string;
    MSL: string;
    MSVG: string;
    MTV: string;
    MVG: string;
    NEF: string;
    NRW: string;
    NULL: string;
    ORF: string;
    OTB: string;
    OTF: string;
    PAL: string;
    PALM: string;
    PAM: string;
    PANGO: string;
    PATTERN: string;
    PBM: string;
    PCD: string;
    PCDS: string;
    PCL: string;
    PCT: string;
    PCX: string;
    PDB: string;
    PDF: string;
    PDFA: string;
    PEF: string;
    PES: string;
    PFA: string;
    PFB: string;
    PFM: string;
    PGM: string;
    PICON: string;
    PICT: string;
    PIX: string;
    PJPEG: string;
    PLASMA: string;
    PNG: string;
    PNG00: string;
    PNG24: string;
    PNG32: string;
    PNG48: string;
    PNG64: string;
    PNG8: string;
    PNM: string;
    PPM: string;
    PREVIEW: string;
    PS: string;
    PS2: string;
    PS3: string;
    PSB: string;
    PSD: string;
    PTIF: string;
    PWP: string;
    RADIAL: string;
    RAF: string;
    RAS: string;
    RAW: string;
    RGB: string;
    RGBA: string;
    RGBO: string;
    RGF: string;
    RLA: string;
    RLE: string;
    RMF: string;
    RW2: string;
    SCR: string;
    SCT: string;
    SFW: string;
    SGI: string;
    SHTML: string;
    SIX: string;
    SIXEL: string;
    SPARSE: string;
    SR2: string;
    SRF: string;
    STEGANO: string;
    SUN: string;
    SVG: string;
    SVGZ: string;
    TEXT: string;
    TGA: string;
    THUMBNAIL: string;
    TIFF: string;
    TIFF64: string;
    TILE: string;
    TIM: string;
    TTC: string;
    TTF: string;
    TXT: string;
    UBRL: string;
    UBRL6: string;
    UIL: string;
    UYVY: string;
    VDA: string;
    VICAR: string;
    VID: string;
    VIFF: string;
    VIPS: string;
    VST: string;
    WBMP: string;
    WMF: string;
    WMV: string;
    WMZ: string;
    WPG: string;
    X: string;
    X3F: string;
    XBM: string;
    XC: string;
    XCF: string;
    XPM: string;
    XPS: string;
    XV: string;
    XWD: string;
    YCbCr: string;
    YCbCrA: string;
    YUV: string;
};
export var Geometry: typeof import("./Geometry");
export var Expressions: typeof import("./Expressions");
import Option_1 = require("./Options/Option");
import Option = Option_1.Option;
import Item_1 = require("./Item");
import Item = Item_1.Item;
import Convert_1 = require("./Convert");
import Convert = Convert_1.Convert;
import Magick_1 = require("./Magick");
import Magick = Magick_1.Magick;
export { Option, Item, Convert, Magick };
