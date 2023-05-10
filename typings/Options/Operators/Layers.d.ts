export default Layers;
export type Method = string;
export namespace Method {
    const Coalesce: string;
    const CompareAny: string;
    const CompareClear: string;
    const CompareOverlay: string;
    const Dispose: string;
    const Optimize: string;
    const OptimizeFrame: string;
    const OptimizePlus: string;
    const OptimizeTransparency: string;
    const RemoveDups: string;
    const RemoveZero: string;
    const Composite: string;
    const Merge: string;
    const Flatten: string;
    const Mosaic: string;
    const TrimBounds: string;
}
/**
 * @implements {Operator}
 */
export class Layers implements Operator {
    /**
     * @param {Method} method
     */
    constructor(method: Method);
    method: string;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
