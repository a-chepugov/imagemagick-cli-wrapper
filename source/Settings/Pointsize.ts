import Setting from "./_Setting";

export class Pointsize implements Setting {
	private readonly value: number;

	constructor(value: number) {
		this.value = value;
	}

	build(): string[] {
		return [
			'-pointsize',
			`${this.value}`
		];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Pointsize;
