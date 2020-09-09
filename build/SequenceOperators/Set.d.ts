import SequenceOperator from "./_SequenceOperator";
export declare class Set implements SequenceOperator {
    private readonly key;
    private readonly value;
    constructor(key: string, value?: string);
    build(): string[];
    inspect(): string;
}
export default Set;
