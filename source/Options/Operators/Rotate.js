const Operator = require('./_Operator').Operator;

/**
 * @enum {string}
 */
const Shear = {
	'>': '>',
	'<': '<'
};

exports.Shear = Shear;

/**
 * @implements {Operator}
 */
class Rotate {
	/**
	 * @param {number} degrees
	 * @param {Shear} shear
	 */
	constructor(degrees, shear = undefined) {
		this.degrees = degrees;
		this.shear = shear;
	}

	build() {
		return ['-rotate', `${this.degrees}${this.shear ? this.shear : ''}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Rotate = Rotate;
exports.default = Rotate;
