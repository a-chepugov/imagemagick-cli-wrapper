export default Delete;
/**
 * @implements {SequenceOperator}
 */
export class Delete implements SequenceOperator {
    /**
     * @param {string} index
     */
    constructor(index?: string);
    index: string;
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
