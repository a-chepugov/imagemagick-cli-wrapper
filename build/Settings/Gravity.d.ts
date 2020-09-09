import Setting from "./_Setting";
export declare enum Type {
    None = "None",
    Center = "Center",
    East = "East",
    Forget = "Forget",
    NorthEast = "NorthEast",
    North = "North",
    NorthWest = "NorthWest",
    SouthEast = "SouthEast",
    South = "South",
    SouthWest = "SouthWest",
    West = "West"
}
export declare class Gravity implements Setting {
    private readonly type;
    constructor(type: Type);
    build(): string[];
    inspect(): string;
}
export default Gravity;
