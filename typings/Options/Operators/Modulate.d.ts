export default Modulate;
/**
 * @implements {Operator}
 */
export class Modulate implements Operator {
    /**
     * @param {number} brightness
     * @param {number=} saturation
     * @param {number=} hue
     */
    constructor(brightness: number, saturation?: number | undefined, hue?: number | undefined);
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
