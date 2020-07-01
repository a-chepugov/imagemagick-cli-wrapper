import ReadableStream = NodeJS.ReadableStream;
import WritableStream = NodeJS.WritableStream;

import Input from "./_Input";
import FORMATS from "../FORMATS";

export class STDIN implements Input {
	private readonly input: ReadableStream;
	private readonly type: string;

	constructor(input: ReadableStream, type: FORMATS) {
		this.input = input;
		this.type = type;
	}

	pipeTo(output: WritableStream) {
		return this.input.pipe(output);
	}

	build(): string[] {
		return [`${this.type}:-`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default STDIN;
