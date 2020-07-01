import Operator from "./_Operator";

export class Unsharp implements Operator {
	private readonly radius: number;
	private readonly sigma: number;
	private readonly gain: number;
	private readonly threshold: number;

	constructor(radius: number, sigma?: number, gain?: number, threshold?: number) {
		this.radius = radius;
		this.sigma = sigma;
		this.gain = gain;
		this.threshold = threshold;
	}

	build(): string[] {
		return [
			'-unsharp',
			`${this.radius}`
			+ (this.sigma ? `x${this.sigma}` : '')
			+ (this.gain ? `+${this.gain}` : '')
			+ (this.gain && this.threshold ? `+${this.threshold}` : '')
		]
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Unsharp;
