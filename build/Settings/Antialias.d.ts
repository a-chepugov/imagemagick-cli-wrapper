import Setting from "./_Setting";
export declare class Antialias implements Setting {
    private readonly disable;
    constructor(disable?: boolean);
    build(): string[];
    inspect(): string;
}
export default Antialias;
