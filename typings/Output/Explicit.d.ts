export default Explicit;
/**
 * @implements {Output}
 */
export class Explicit implements Output {
    /**
     * @param {string} name
     * @param {FORMATS} type
     */
    constructor(name: string, type: FORMATS);
    name: string;
    type: string;
    /**
     * @param {NodeJS.ReadableStream} input
     */
    pipeFrom(input: NodeJS.ReadableStream): void;
    build(): string[];
    inspect(): string;
}
import Output_1 = require("./_Output");
import Output = Output_1.Output;
import FORMATS_1 = require("../FORMATS");
import FORMATS = FORMATS_1.FORMATS;
