export default Magick;
/**
 * @description `Magick` command builder
 */
export class Magick {
    /**
     * @param {Input} input
     */
    static of(input: Input): Magick;
    /**
     * @protected
     */
    protected options: Options;
    /**
     * @param {Input} input
     */
    from(input: Input): Magick;
    input: Input;
    /**
     * @param {Output} output
     */
    into(output: Output): Magick;
    output: Output;
    /**
     * @param {Option} option
     */
    with(option: Option): Magick;
    /**
     * @param {Array<Option>} options
     */
    append(options: Array<Option>): Magick;
    /**
     * @param {Array<Option>} options
     */
    fork(options: Array<Option>): Magick;
    build(): string[];
    inspect(): string;
}
import Options_1 = require("./Options/Options");
import Options = Options_1.Options;
import Input_1 = require("./Input/_Input");
import Input = Input_1.Input;
import Output_1 = require("./Output/_Output");
import Output = Output_1.Output;
import Option_1 = require("./Options/Option");
import Option = Option_1.Option;
