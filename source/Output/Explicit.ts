import ReadableStream = NodeJS.ReadableStream;

import Output from "./Output";
import FORMATS from "../FORMATS";

export class Explicit implements Output {
	private readonly name: string;
	private readonly type: FORMATS;

	constructor(name: string, type: FORMATS) {
		this.name = name;
		this.type = type;
	}

	pipeFrom(input: ReadableStream) {
	}

	build(): string[] {
		return [`${this.type}:${this.name}`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Explicit;
