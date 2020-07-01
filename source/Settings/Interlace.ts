import Setting from "./_Setting";

export enum Type {
	none = "none",
	line = "line",
	plane = "plane",
	partition = "partition",
	JPEG = "JPEG",
	GIF = "GIF",
	PNG = "PNG",
}

export class Interlace implements Setting {
	private readonly type: Type;

	constructor(type: Type) {
		this.type = type;
	}

	build(): string[] {
		return ['-interlace', this.type];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Interlace;
