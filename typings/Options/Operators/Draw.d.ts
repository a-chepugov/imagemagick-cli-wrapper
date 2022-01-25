export default Draw;
/**
 * @implements {Operator}
 */
export class Draw implements Operator {
    /**
     * @param {Array<Primitive>} primitives - graphic primitives
     */
    constructor(primitives: Array<Primitive>);
    primitives: Primitive[];
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
import Primitive_1 = require("../../Primitives");
import Primitive = Primitive_1.Primitive;
