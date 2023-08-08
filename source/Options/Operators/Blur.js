const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Blur {
	/**
	 * @param {number} radius
	 * @param {number} [sigma]
	 */
	constructor(radius, sigma) {
		this.radius = radius;
		this.sigma = sigma;
	}

	build() {
		const prefix = '-blur';
		let parameters = `${this.radius}`;
		parameters += this.sigma ? `x${this.sigma}` : '';
		return [prefix, parameters];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Blur = Blur;
exports.default = Blur;
