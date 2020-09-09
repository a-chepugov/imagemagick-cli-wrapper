import Operator from "./_Operator";
export interface Annotate extends Operator {
}
export default Annotate;
export declare class Degrees implements Annotate {
    private readonly degrees;
    private readonly text;
    constructor(degrees: number, text: string);
    build(): string[];
    inspect(): string;
}
export declare class DegreesXY implements Annotate {
    private readonly Xdegrees;
    private readonly Ydegrees;
    private readonly text;
    constructor(Xdegrees: number, Ydegrees: number, text: string);
    build(): string[];
    inspect(): string;
}
export declare class DegreesXYTxTy implements Annotate {
    private readonly Xdegrees;
    private readonly Ydegrees;
    private readonly transformX;
    private readonly transformY;
    private readonly text;
    constructor(Xdegrees: number, Ydegrees: number, transformX: number, transformY: number, text: string);
    build(): string[];
    inspect(): string;
}
export declare class TxTy implements Annotate {
    private readonly transformX;
    private readonly transformY;
    private readonly text;
    constructor(transformX: number, transformY: number, text: string);
    build(): string[];
    inspect(): string;
}
