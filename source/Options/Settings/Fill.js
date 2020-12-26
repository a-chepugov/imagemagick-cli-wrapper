const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Fill {
	/**
	 * @param {string} color
	 */
	constructor(color) {
		this.color = color;
	}

	build() {
		return ['-fill', this.color];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Fill = Fill;
exports.default = Fill;
