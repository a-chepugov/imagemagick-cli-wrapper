/// <reference types="node" />
import ReadableStream = NodeJS.ReadableStream;
import WritableStream = NodeJS.WritableStream;
import Input from "./_Input";
import FORMATS from "../FORMATS";
export declare class STDIN implements Input {
    private readonly input;
    private readonly type;
    constructor(input: ReadableStream, type: FORMATS);
    pipeTo(output: WritableStream): WritableStream;
    build(): string[];
    inspect(): string;
}
export default STDIN;
