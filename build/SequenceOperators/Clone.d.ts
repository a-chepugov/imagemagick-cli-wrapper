import Item from "../Item";
import SequenceOperator from "./_SequenceOperator";
export declare class Clone implements SequenceOperator {
    private readonly index;
    private readonly items;
    constructor(index: string | undefined, items: Item[]);
    build(): string[];
    inspect(): string;
}
export default Clone;
