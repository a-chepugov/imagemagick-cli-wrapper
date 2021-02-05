const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Background {
	/**
	 * @param {string} color
	 */
	constructor(color = 'white') {
		this.color = color;
	}

	build() {
		return ['-background', this.color];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Background = Background;
exports.default = Background;
