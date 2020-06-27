import ReadableStream = NodeJS.ReadableStream;
import WritableStream = NodeJS.WritableStream;

import Output from "./Output";
import FORMATS from "../FORMATS";

export class STDOUT implements Output {
	private readonly output: WritableStream;
	private readonly type: FORMATS;

	constructor(output: WritableStream, type: FORMATS) {
		this.output = output;
		this.type = type;
	}

	pipeFrom(input: ReadableStream) {
		return input.pipe(this.output);
	}

	build(): string[] {
		return [`${this.type}:-`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default STDOUT;
