import Setting from "./_Setting";

export class Antialias implements Setting {
	private readonly disable: boolean;

	constructor(disable?: boolean) {
		this.disable = disable;
	}

	build(): string[] {
		return [`${this.disable ? '+' : '-'}antialias`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Antialias;
