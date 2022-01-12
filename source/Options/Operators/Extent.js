const Operator = require('./_Operator').Operator;
const Geometry = require('../../Geometry').Geometry;

/**
 * @implements {Operator}
 */
class Extent {
	/**
	 * @param {Geometry} geometry
	 */
	constructor(geometry) {
		this.geometry = geometry;
	}

	build() {
		return ['-extent', this.geometry.build()];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Extent = Extent;
exports.default = Extent;
