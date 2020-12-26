export default Filename;
/**
 * @implements {Output}
 */
export class Filename implements Output {
    /**
     * @param {string} name
     */
    constructor(name: string);
    name: string;
    /**
     * @param {NodeJS.ReadableStream} input
     */
    pipeFrom(input: NodeJS.ReadableStream): void;
    build(): string[];
    inspect(): string;
}
import Output_1 = require("./_Output");
import Output = Output_1.Output;
