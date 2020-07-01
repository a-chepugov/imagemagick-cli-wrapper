import Operator from "./_Operator";

export class Flip implements Operator {
	build(): string[] {
		return ['-flip'];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Flip;
