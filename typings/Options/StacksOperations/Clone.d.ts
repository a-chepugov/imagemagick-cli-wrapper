export default Clone;
/**
 * @implements {StacksOperation}
 */
export class Clone implements StacksOperation {
    /**
     * @param {string | number} index
     */
    constructor(index?: string | number);
    index: string | number;
    build(): string[];
    inspect(): string;
}
import StacksOperation_1 = require("./_StacksOperation");
import StacksOperation = StacksOperation_1.StacksOperation;
