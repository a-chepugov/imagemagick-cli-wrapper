import Operator from "./Operator";
import {Geometry} from "../Geometry";

export class Resize implements Operator {
	private readonly geometry: Geometry;

	constructor(geometry: Geometry) {
		this.geometry = geometry;
	}

	build(): string[] {
		return ['-resize', this.geometry.build()];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Resize;
