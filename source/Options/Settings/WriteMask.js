const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class WriteMask {
	/**
	 * @param {string} [filename]
	 */
	constructor(filename) {
		this.filename = filename;
	}

	build() {
		return this.filename
			? ['-write-mask', this.filename]
			: ['+write-mask'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.WriteMask = WriteMask;
exports.default = WriteMask;
