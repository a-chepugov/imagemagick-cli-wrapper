import SequenceOperator from "./SequenceOperator";

export class Append implements SequenceOperator {
	private readonly horizontally: boolean;

	constructor(horizontally: boolean) {
		this.horizontally = horizontally;
	}

	build(): string[] {
		return [`${this.horizontally ? '+' : '-'}append`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Append;
