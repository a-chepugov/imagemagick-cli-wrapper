import WritableStream = NodeJS.WritableStream;
import Input from "./_Input";

export class Globbing implements Input {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	pipeTo(output: WritableStream) {
	}

	build(): string[] {
		return [this.name];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Globbing;
