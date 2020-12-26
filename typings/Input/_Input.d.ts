export default Input;
/**
 * @interface
 */
export class Input extends Item {
    /**
     * @param {NodeJS.WritableStream} output
     */
    pipeTo(output: NodeJS.WritableStream): void;
}
import Item_1 = require("../Item");
import Item = Item_1.Item;
