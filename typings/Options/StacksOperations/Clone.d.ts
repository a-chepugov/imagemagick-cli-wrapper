export default Clone;
/**
 * @implements {StacksOperation}
 * @description клонирует копию изображения или канала
 * -clone 0 - выполняет клонирование поиндесу
 * +clone - выполняет клонирование последней копии
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
