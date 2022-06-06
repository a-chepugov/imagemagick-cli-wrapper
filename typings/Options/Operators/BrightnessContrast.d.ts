export default BrightnessContrast;
/**
 * @implements {Operator}
 */
export class BrightnessContrast implements Operator {
    /**
     * @param {number} [brightness=0]
     * @param {number} [contrast=0]
     */
    constructor(brightness?: number, contrast?: number);
    /** @private */
    private brightness;
    /** @private */
    private contrast;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
