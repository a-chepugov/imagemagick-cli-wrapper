export default Item;
/**
 * @interface
 */
export class Item {
    /**
     * @returns {Array<string>}
     */
    build(): Array<string>;
    /**
     * @returns {string}
     */
    inspect(): string;
}
