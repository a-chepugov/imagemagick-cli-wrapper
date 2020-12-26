export default Set;
/**
 * @implements {SequenceOperator}
 */
export class Set implements SequenceOperator {
    /**
     * @param {string} key
     * @param {string} value
     */
    constructor(key: string, value: string);
    key: string;
    value: string;
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
