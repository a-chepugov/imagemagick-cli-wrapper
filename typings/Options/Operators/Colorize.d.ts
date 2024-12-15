export default Colorize;
/**
 * @implements {Operator}
 */
export class Colorize implements Operator {
    /**
     * @param {number} value
     */
    constructor(value: number);
    value: number;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
