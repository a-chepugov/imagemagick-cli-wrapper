const Operator = require('./_Operator').Operator;
const Geometry = require('../../Geometry').Geometry;

/**
 * @implements {Operator}
 */
class Resize {
	/**
	 * @param {Geometry} geometry
	 */
	constructor(geometry) {
		this.geometry = geometry;
	}

	build() {
		return ['-resize', this.geometry.build()];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Resize = Resize;
exports.default = Resize;
