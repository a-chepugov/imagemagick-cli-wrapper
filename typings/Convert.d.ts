export default Convert;
export class Convert {
    /**
     * @param {Input} input
     */
    static of(input: Input): Convert;
    /**
     * @protected
     */
    protected options: Options;
    /**
     * @param {Input} input
     */
    from(input: Input): Convert;
    input: Input;
    /**
     * @param {Output} output
     */
    into(output: Output): Convert;
    output: Output;
    /**
     * @param {Option} option
     */
    with(option: Option): Convert;
    /**
     * @param {Array<Option>} options
     */
    append(options: Array<Option>): Convert;
    /**
     * @param {Array<Option>} options
     */
    fork(options: Array<Option>): Convert;
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
