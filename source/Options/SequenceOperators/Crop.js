const Geometry = require('../../Geometry').Geometry;
const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Crop {
	/**
	 * @param {Geometry} geometry
	 * @param {boolean} tiles
	 * @param {boolean} emphatically
	 */
	constructor(geometry, tiles = false, emphatically = false) {
		this.geometry = geometry;
		this.tiles = tiles;
		this.emphatically = emphatically;
	}

	build() {
		return [
			'-crop',
			this.geometry.build() + (this.tiles ? '@' : '') + (this.emphatically ? '!' : '')
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}
exports.Crop = Crop;
exports.default = Crop;
