export default Clone;
/**
 * @implements {SequenceOperator}
 */
export class Clone implements SequenceOperator {
    /**
     * @param {string | undefined} index
     * @param {Array<Option>} options
     */
    constructor(index: string | undefined, options: Array<Option>);
    index: string;
    options: Option[];
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
import Option_1 = require("../Option");
import Option = Option_1.Option;
