/// <reference types="node" />
import ReadableStream = NodeJS.ReadableStream;
import WritableStream = NodeJS.WritableStream;
import Output from "./_Output";
import FORMATS from "../FORMATS";
export declare class STDOUT implements Output {
    private readonly output;
    private readonly type;
    constructor(output: WritableStream, type: FORMATS);
    pipeFrom(input: ReadableStream): WritableStream;
    build(): string[];
    inspect(): string;
}
export default STDOUT;
