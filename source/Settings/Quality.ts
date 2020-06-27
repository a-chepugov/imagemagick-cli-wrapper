import Setting from "./Setting";

export class Quality implements Setting {
	private readonly value: number;

	constructor(value: number) {
		this.value = value;
	}

	build(): string[] {
		return ['-quality', `${this.value}`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Quality;
