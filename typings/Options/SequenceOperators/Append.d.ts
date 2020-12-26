export default Append;
/**
 * @implements {SequenceOperator}
 */
export class Append implements SequenceOperator {
    /**
     * @param {boolean} horizontally
     */
    constructor(horizontally: boolean);
    horizontally: boolean;
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
