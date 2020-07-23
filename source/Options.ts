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

	push(option: Option) {
		this.options.push(option);
		return this;
	}

	unshift(operation: Option) {
		this.options.unshift(operation);
		return this;
	}

	append(options: Option[]) {
		this.options.splice(this.options.length, 0, ...options);
		return this;
	}

	prepend(options: Option[]) {
		this.options.splice(0, 0, ...options);
		return this;
	}

	static of(options: Option[]) {
		return (new Options())
			.append(options);
	}

	build(): string[] {
		return this.options.reduce((result: string[], option: Option) => result.concat(option.build()), []);
	}

	inspect() {
		return this.options.reduce((result: string[], option: Option) => result.concat(option.inspect()), []);
	}
}

export default Options;
