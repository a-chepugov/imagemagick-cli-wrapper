import SequenceOperator from "./_SequenceOperator";
export declare class Delete implements SequenceOperator {
    private readonly index;
    constructor(index?: number);
    build(): string[];
    inspect(): string;
}
export default Delete;
