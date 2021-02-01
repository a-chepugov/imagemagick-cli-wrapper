export default Group;
/**
 * @implements {Item}
 */
export class Group implements Item {
    /**
     * @param {Array<Item>} items
     */
    constructor(items: Array<Item>);
    _items: Item[];
    build(): string[];
    inspect(): string;
}
import Item_1 = require("../../Item.js");
import Item = Item_1.Item;
