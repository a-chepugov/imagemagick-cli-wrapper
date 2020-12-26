export default BuiltIn;
/**
 * @implements {Input}
 */
export class BuiltIn implements Input {
    /**
     * @param {string} name
     */
    constructor(name: string);
    /** @readonly */
    readonly name: string;
    /**
     * @param {NodeJS.WritableStream} output
     */
    pipeTo(output: NodeJS.WritableStream): void;
    build(): string[];
    inspect(): string;
}
import Input_1 = require("./_Input");
import Input = Input_1.Input;
