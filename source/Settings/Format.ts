import Setting from "./_Setting";

export class Format implements Setting {
	private readonly string: string;

	constructor(string: string) {
		this.string = string;
	}

	build(): string[] {
		return ['-format', this.string];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Format;
