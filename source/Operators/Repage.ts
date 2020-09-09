import Operator from "./_Operator";
import Geometry from "../Geometry";

export class Repage implements Operator {
	private readonly geometry: Geometry;

	constructor(geometry?: Geometry) {
		this.geometry = geometry;
	}

	build(): string[] {
		const result = [`${this.geometry ? '-' : '+'}repage`];
		if (this.geometry) {
			result.push(this.geometry.build());
		}
		return result;
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Repage;
