import ChannelOperator from './ChannelOperators/_ChannelOperator';
import Operator from './Operators/_Operator';
import SequenceOperator from './SequenceOperators/_SequenceOperator';
import Setting from './Settings/_Setting';
import StacksOperation from './StacksOperations/_StacksOperation';

export type Option = ChannelOperator | Operator | SequenceOperator | Setting | StacksOperation;

export class Options {
	private readonly options: Option[];

	constructor() {
		this.options = [];
	}

	push(operation: Option) {
		this.options.push(operation);
		return this;
	}

	unshift(operation: Option) {
		this.options.unshift(operation);
		return this;
	}

	append(operations: Option[]) {
		this.options.splice(this.options.length, 0, ...operations);
		return this;
	}

	prepend(operations: Option[]) {
		this.options.splice(0, 0, ...operations);
		return this;
	}

	static of(operations: Option[]) {
		return (new Options())
			.append(operations);
	}

	build(): string[] {
		return this.options.reduce((result: string[], operation: Option) => result.concat(operation.build()), []);
	}

	inspect() {
		return this.options.reduce((result: string[], operation: Option) => result.concat(operation.inspect()), []);
	}
}

export default Options;
