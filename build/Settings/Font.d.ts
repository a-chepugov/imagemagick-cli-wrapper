import Setting from "./_Setting";
export declare class Font implements Setting {
    private readonly name;
    constructor(name: string);
    build(): string[];
    inspect(): string;
}
export default Font;
