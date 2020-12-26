export default Output;
/**
 * @interface
 */
export class Output extends Item {
    /**
     * @param {NodeJS.ReadableStream} input
     */
    pipeFrom(input: NodeJS.ReadableStream): void;
}
import Item_1 = require("../Item");
import Item = Item_1.Item;
