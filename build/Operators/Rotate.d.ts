import Operator from "./_Operator";
export declare enum Shear {
    ">" = ">",
    "<" = "<"
}
export declare class Rotate implements Operator {
    private readonly degrees;
    private readonly shear;
    constructor(degrees: number, shear?: Shear);
    build(): string[];
    inspect(): string;
}
export default Rotate;
