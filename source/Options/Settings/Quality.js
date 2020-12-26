const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Quality {
	/**
	 * @param {number} value
	 */
	constructor(value) {
		this.value = value;
	}

	build() {
		return ['-quality', `${this.value}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Quality = Quality;
exports.default = Quality;
