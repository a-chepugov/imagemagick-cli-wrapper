import Setting from "./Setting";

export class Fill implements Setting {
	private readonly color: string;

	constructor(color: string) {
		this.color = color;
	}

	build(): string[] {
		return ['-fill', this.color];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Fill;
