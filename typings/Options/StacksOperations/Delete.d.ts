export default Delete;
/**
 * @implements {StacksOperation}
 */
export class Delete implements StacksOperation {
    /**
     * @param {string} index
     */
    constructor(index?: string);
    index: string;
    build(): string[];
    inspect(): string;
}
import StacksOperation_1 = require("./_StacksOperation");
import StacksOperation = StacksOperation_1.StacksOperation;
