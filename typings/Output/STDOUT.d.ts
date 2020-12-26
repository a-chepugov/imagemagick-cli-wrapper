export default STDOUT;
/**
 * @implements {Output}
 */
export class STDOUT implements Output {
    /**
     * @param {NodeJS.WritableStream} output
     * @param {FORMATS} type
     */
    constructor(output: NodeJS.WritableStream, type: FORMATS);
    output: NodeJS.WritableStream;
    type: string;
    /**
     * @param {NodeJS.ReadableStream} input
     */
    pipeFrom(input: NodeJS.ReadableStream): NodeJS.WritableStream;
    build(): string[];
    inspect(): string;
}
import Output_1 = require("./_Output");
import Output = Output_1.Output;
import FORMATS_1 = require("../FORMATS");
import FORMATS = FORMATS_1.FORMATS;
