const Setting = require('./_Setting').Setting;
const Geometry = require('../../Geometry').Geometry;

/**
 * @implements {Setting}
 */
class Region {
	/**
	 * @param {Geometry} [geometry]
	 */
	constructor(geometry) {
		this.geometry = geometry;
	}

	build() {
		return this.geometry
			? ['-region', this.geometry.build()]
			: ['+region'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Region = Region;
exports.default = Region;
