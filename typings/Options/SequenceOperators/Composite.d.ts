export default Composite;
/**
 * @implements {SequenceOperator}
 */
export class Composite implements SequenceOperator {
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
