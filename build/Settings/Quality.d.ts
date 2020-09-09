import Setting from "./_Setting";
export declare class Quality implements Setting {
    private readonly value;
    constructor(value: number);
    build(): string[];
    inspect(): string;
}
export default Quality;
