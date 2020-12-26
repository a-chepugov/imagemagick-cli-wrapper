export default Rotate;
export type Shear = string;
/**
 * @enum {string}
 */
export const Shear: {
    '>': string;
    '<': string;
};
/**
 * @implements {Operator}
 */
export class Rotate implements Operator {
    /**
     * @param {number} degrees
     * @param {Shear} shear
     */
    constructor(degrees: number, shear: Shear);
    degrees: number;
    shear: string;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
