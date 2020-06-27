import SequenceOperator from "./SequenceOperator";

export class Delete implements SequenceOperator {
	private readonly index: number;

	constructor(index?: number) {
		this.index = index;
	}

	build(): string[] {
		return [`${this.index === undefined ? '+' : '-'}delete`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Delete;
