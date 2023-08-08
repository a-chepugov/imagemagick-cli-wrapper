export default Blur;
/**
 * @implements {Operator}
 */
export class Blur implements Operator {
    /**
     * @param {number} radius
     * @param {number} [sigma]
     */
    constructor(radius: number, sigma?: number);
    radius: number;
    sigma: number;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
