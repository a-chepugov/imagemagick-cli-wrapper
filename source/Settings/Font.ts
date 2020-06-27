import Setting from "./Setting";

export class Font implements Setting {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	build(): string[] {
		return ['-font', this.name];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Font;
