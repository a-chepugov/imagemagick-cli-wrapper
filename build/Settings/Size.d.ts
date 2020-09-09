import Setting from "./_Setting";
export declare class Size implements Setting {
    private readonly width;
    private readonly height;
    private readonly offset;
    constructor(width: number, height?: number, offset?: number);
    build(): string[];
    inspect(): string;
}
export default Size;
