export default STDIN;
/**
 * @implements {Input}
 */
export class STDIN implements Input {
    /**
     * @param {NodeJS.ReadableStream} input
     * @param {FORMATS} type
     */
    constructor(input: NodeJS.ReadableStream, type: typeof FORMATS);
    /** @readonly */
    readonly input: NodeJS.ReadableStream;
    /** @readonly */
    readonly type: typeof FORMATS;
    /**
     * @param {NodeJS.WritableStream} output
     */
    pipeTo(output: NodeJS.WritableStream): NodeJS.WritableStream;
    build(): string[];
    inspect(): string;
}
import Input_1 = require("./_Input");
import Input = Input_1.Input;
import FORMATS = require("../FORMATS");
