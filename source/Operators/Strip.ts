import Operator from "./Operator";

export class Strip implements Operator {
	build(): string[] {
		return ['-strip'];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Strip;
