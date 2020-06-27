import SequenceOperator from "./SequenceOperator";

export class Set implements SequenceOperator {
	private readonly key: string;
	private readonly value: string;

	constructor(key: string, value?: string) {
		this.key = key;
		this.value = value;
	}

	build(): string[] {
		const params = [
			`${this.value === undefined ? '+' : '-'}set`,
			this.key
		];

		if (this.value !== undefined) {
			params.push(this.value)
		}

		return params;
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Set;
