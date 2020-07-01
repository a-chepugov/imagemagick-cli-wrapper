import Operator from "./_Operator";

export enum Shear {
	">" = ">",
	"<" = "<",
}

export class Rotate implements Operator {
	private readonly degrees: number;
	private readonly shear: Shear;

	constructor(degrees: number, shear?: Shear) {
		this.degrees = degrees;
		this.shear = shear;
	}

	build(): string[] {
		return ['-rotate', `${this.degrees}${this.shear ? this.shear : ''}`];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Rotate;
