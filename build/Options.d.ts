import ChannelOperator from './ChannelOperators/_ChannelOperator';
import Operator from './Operators/_Operator';
import SequenceOperator from './SequenceOperators/_SequenceOperator';
import Setting from './Settings/_Setting';
import StacksOperation from './StacksOperations/_StacksOperation';
export declare type Option = ChannelOperator | Operator | SequenceOperator | Setting | StacksOperation;
export declare class Options {
    private readonly options;
    constructor();
    push(option: Option): this;
    unshift(operation: Option): this;
    append(options: Option[]): this;
    prepend(options: Option[]): this;
    static of(options: Option[]): Options;
    build(): string[];
    inspect(): string[];
}
export default Options;
