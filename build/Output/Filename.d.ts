/// <reference types="node" />
import ReadableStream = NodeJS.ReadableStream;
import Output from "./_Output";
export declare class Filename implements Output {
    private readonly name;
    constructor(name: string);
    pipeFrom(input: ReadableStream): void;
    build(): string[];
    inspect(): string;
}
export default Filename;
