import Operator from "./_Operator";
export declare class Unsharp implements Operator {
    private readonly radius;
    private readonly sigma;
    private readonly gain;
    private readonly threshold;
    constructor(radius: number, sigma?: number, gain?: number, threshold?: number);
    build(): string[];
    inspect(): string;
}
export default Unsharp;
