import Setting from "./_Setting";
export declare class Fill implements Setting {
    private readonly color;
    constructor(color: string);
    build(): string[];
    inspect(): string;
}
export default Fill;
