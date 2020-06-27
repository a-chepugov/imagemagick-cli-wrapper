import SequenceOperator from "./SequenceOperator";

export class Write implements SequenceOperator {
	private readonly filename: string;

	constructor(filename: string) {
		this.filename = filename;
	}

	build(): string[] {
		return ['-write', this.filename];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Write;
