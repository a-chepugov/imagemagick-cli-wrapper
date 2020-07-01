import SequenceOperator from "./_SequenceOperator";

export class Separate implements SequenceOperator {
	build(): string[] {
		return ['-separate'];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Separate;
