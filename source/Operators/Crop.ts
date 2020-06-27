import Operator from "./Operator";
import {Geometry} from "../Geometry";

export class Crop implements Operator {
	private readonly geometry: Geometry;
	private readonly tiles: boolean;
	private readonly emphatically: boolean;

	constructor(geometry: Geometry, tiles = false, emphatically = false) {
		this.geometry = geometry;
		this.tiles = tiles;
		this.emphatically = emphatically;
	}

	build(): string[] {
		return [
			'-crop ',
			this.geometry.build() + (this.tiles ? '@' : '') + (this.emphatically ? '!' : '')
		]
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Crop;
