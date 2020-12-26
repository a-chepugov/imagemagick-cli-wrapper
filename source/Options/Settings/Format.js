const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Format {
	/**
	 * @param {string} string
	 */
	constructor(string) {
		this.string = string;
	}

	build() {
		return ['-format', this.string];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Format = Format;
exports.default = Format;
