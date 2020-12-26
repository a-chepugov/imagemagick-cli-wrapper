const Operator = require('./_Operator').Operator;
const Geometry = require('../../Geometry').Geometry

/**
 * @implements {Operator}
 */
class Repage {
	/**
	 * @param {(Geometry)} geometry
	 */
	constructor(geometry = undefined) {
		this.geometry = geometry;
	}

	build() {
		const result = [`${this.geometry ? '-' : '+'}repage`];
		if (this.geometry) {
			result.push(this.geometry.build());
		}
		return result;
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Repage = Repage;
exports.default = Repage;
