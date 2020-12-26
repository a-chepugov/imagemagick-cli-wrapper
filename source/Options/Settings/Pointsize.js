const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Pointsize {
	/**
	 * @param {number} value
	 */
	constructor(value) {
		this.value = value;
	}

	build() {
		return [
			'-pointsize',
			`${this.value}`
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Pointsize = Pointsize;
exports.default = Pointsize;
