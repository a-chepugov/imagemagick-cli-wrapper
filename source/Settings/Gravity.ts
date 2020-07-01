import Setting from "./_Setting";

export enum Type {
	None = "None",
	Center = "Center",
	East = "East",
	Forget = "Forget",
	NorthEast = "NorthEast",
	North = "North",
	NorthWest = "NorthWest",
	SouthEast = "SouthEast",
	South = "South",
	SouthWest = "SouthWest",
	West = "West",
}

export class Gravity implements Setting {
	private readonly type: Type;

	constructor(type: Type) {
		this.type = type;
	}

	build(): string[] {
		return ['-gravity', `${this.type}`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Gravity;
