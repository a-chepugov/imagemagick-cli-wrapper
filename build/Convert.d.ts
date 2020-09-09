import { Input } from './Input';
import { Output } from './Output';
import { Option } from './Options';
export declare class Convert {
    input: Input;
    output: Output;
    options: Option[];
    constructor();
    from(input: Input): this;
    into(output: Output): this;
    with(operation: Option): this;
    append(operations: Option[]): this;
    fork(operations: Option[]): this;
    inspect(): string[];
    build(): string[];
    static of(input: Input): Convert;
}
export default Convert;
