const Operator = require('./_Operator').Operator;
const Geometry = require('../../Geometry').Geometry;

/**
 * @implements {Operator}
 */
class GeometryOperator {
	/**
	 * @param {Geometry} geometry
	 */
	constructor(geometry) {
		this.geometry = geometry;
	}

	build() {
		return ['-geometry', this.geometry.build()];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Geometry = GeometryOperator;
exports.default = GeometryOperator;
