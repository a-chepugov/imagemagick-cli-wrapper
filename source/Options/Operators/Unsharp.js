const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Unsharp {
	/**
	 * @param {number} radius
	 * @param {number} sigma
	 * @param {number} gain
	 * @param {number} threshold
	 */
	constructor(radius, sigma, gain, threshold) {
		this.radius = radius;
		this.sigma = sigma;
		this.gain = gain;
		this.threshold = threshold;
	}

	build() {
		return [
			'-unsharp',
			`${this.radius}` +
			(Number.isFinite(this.sigma) ? `x${this.sigma}` : '') +
			(Number.isFinite(this.gain) ? `${this.gain < 0 ? '' : '+'}${this.gain}` : '') +
			(Number.isFinite(this.gain) && Number.isFinite(this.threshold) ? `${this.threshold < 0 ? '' : '+'}${this.threshold}` : '')
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Unsharp = Unsharp;
exports.default = Unsharp;
