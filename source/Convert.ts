import {Input} from './Input';
import {Output} from './Output';
import {Clone, Delete} from './SequenceOperators';
import {Option, Options} from './Options';

export class Convert {
	input: Input;
	output: Output;
	options: Option[];

	constructor() {
		this.options = [];
	}

	from(input: Input) {
		this.input = input;
		return this;
	}

	into(output: Output) {
		this.output = output;
		return this;
	}

	with(operation: Option) {
		this.options.push(operation);
		return this;
	}

	fork(operations: Option[]) {
		const thread = new Clone(
			undefined,
			operations.concat(new Delete())
		);
		this.options.push(thread);
		return this;
	}

	inspect() {
		return Options.of([this.input, ...this.options, this.output]).inspect();
	}

	build() {
		if (this.input && this.output) {
			return ['convert'].concat(Options.of([this.input, ...this.options, this.output]).build());
		} else {
			throw new Error('Invalid input/output data for conversion');
		}
	}

	static of(input: Input) {
		return new Convert().from(input);
	}
}

export default Convert;
