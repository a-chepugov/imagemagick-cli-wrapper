const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Font {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		this.name = name;
	}

	build() {
		return ['-font', this.name];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Font = Font;
exports.default = Font;
