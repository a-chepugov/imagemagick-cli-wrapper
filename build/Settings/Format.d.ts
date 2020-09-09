import Setting from "./_Setting";
export declare class Format implements Setting {
    private readonly string;
    constructor(string: string);
    build(): string[];
    inspect(): string;
}
export default Format;
