import ReadableStream = NodeJS.ReadableStream;
import Output from "./_Output";

export class Filename implements Output {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	pipeFrom(input: ReadableStream) {
	}

	build(): string[] {
		return [this.name];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Filename;
