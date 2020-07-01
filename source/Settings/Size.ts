import Setting from "./_Setting";

export class Size implements Setting {
	private readonly width: number;
	private readonly height: number;
	private readonly offset: number;

	constructor(width: number, height?: number, offset?: number) {
		this.width = width;
		this.height = height;
		this.offset = offset;
	}

	build(): string[] {
		return [
			'-size',
			`${this.width}${this.height ? `x${this.height}` : ''}${this.offset ? `+${this.offset}` : ''}`
		];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Size;
