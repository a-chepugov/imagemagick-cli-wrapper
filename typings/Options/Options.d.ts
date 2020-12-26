export default Options;
/**
 * @description Options aggregator
 */
export class Options {
    /**
     * @param {Array<Option>} options
     */
    static of(options: Array<Option>): Options;
    /**
     * @readonly
     * @type {Array<Option>}
     * */
    readonly options: Array<Option>;
    /**
     * @param {Option} option
     */
    push(option: Option): Options;
    /**
     * @param {Option} option
     */
    unshift(option: Option): Options;
    /**
     * @param {Array<Option>} options
     */
    append(options: Array<Option>): Options;
    /**
     * @param {Array<Option>} options
     */
    prepend(options: Array<Option>): Options;
    build(): any[];
    inspect(): string;
    [Symbol.iterator](): Generator<Option, any, undefined>;
}
import Option_1 = require("./Option");
import Option = Option_1.Option;
