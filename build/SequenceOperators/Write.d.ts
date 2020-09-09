import SequenceOperator from "./_SequenceOperator";
export declare class Write implements SequenceOperator {
    private readonly filename;
    constructor(filename: string);
    build(): string[];
    inspect(): string;
}
export default Write;
