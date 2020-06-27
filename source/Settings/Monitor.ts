import Setting from "./Setting";

export class Monitor implements Setting {
	build(): string[] {
		return ['-monitor'];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Monitor;
