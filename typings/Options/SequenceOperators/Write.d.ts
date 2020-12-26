export default Write;
/**
 * @implements {SequenceOperator}
 */
export class Write implements SequenceOperator {
    /**
     * @param {string} filename
     */
    constructor(filename: string);
    filename: string;
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
