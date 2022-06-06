export default Modulate;
/**
 * @implements {Operator}
 */
export class Modulate implements Operator {
    /**
     * @param {number} [brightness=100]
     * @param {number} [saturation=100]
     * @param {number} [hue=100]
     */
    constructor(brightness?: number, saturation?: number, hue?: number);
    /** @private */
    private brightness;
    /** @private */
    private saturation;
    /** @private */
    private hue;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
