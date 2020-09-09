import Setting from "./_Setting";
export declare enum Type {
    none = "none",
    line = "line",
    plane = "plane",
    partition = "partition",
    JPEG = "JPEG",
    GIF = "GIF",
    PNG = "PNG"
}
export declare class Interlace implements Setting {
    private readonly type;
    constructor(type: Type);
    build(): string[];
    inspect(): string;
}
export default Interlace;
