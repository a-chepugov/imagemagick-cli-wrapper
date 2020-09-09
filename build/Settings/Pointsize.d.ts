import Setting from "./_Setting";
export declare class Pointsize implements Setting {
    private readonly value;
    constructor(value: number);
    build(): string[];
    inspect(): string;
}
export default Pointsize;
