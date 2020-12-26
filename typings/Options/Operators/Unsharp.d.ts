export default Unsharp;
/**
 * @implements {Operator}
 */
export class Unsharp implements Operator {
    /**
     * @param {number} radius
     * @param {number} sigma
     * @param {number} gain
     * @param {number} threshold
     */
    constructor(radius: number, sigma: number, gain: number, threshold: number);
    radius: number;
    sigma: number;
    gain: number;
    threshold: number;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
