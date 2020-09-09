/// <reference types="node" />
import ReadableStream = NodeJS.ReadableStream;
import Output from "./_Output";
import FORMATS from "../FORMATS";
export declare class Explicit implements Output {
    private readonly name;
    private readonly type;
    constructor(name: string, type: FORMATS);
    pipeFrom(input: ReadableStream): void;
    build(): string[];
    inspect(): string;
}
export default Explicit;
