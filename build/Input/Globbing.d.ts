/// <reference types="node" />
import WritableStream = NodeJS.WritableStream;
import Input from "./_Input";
export declare class Globbing implements Input {
    private readonly name;
    constructor(name: string);
    pipeTo(output: WritableStream): void;
    build(): string[];
    inspect(): string;
}
export default Globbing;
