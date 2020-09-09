import SequenceOperator from "./_SequenceOperator";
export declare class Append implements SequenceOperator {
    private readonly horizontally;
    constructor(horizontally: boolean);
    build(): string[];
    inspect(): string;
}
export default Append;
