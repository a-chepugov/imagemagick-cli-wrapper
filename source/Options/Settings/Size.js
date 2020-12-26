const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Size {
	/**
	 * @param {number} width
	 * @param {number} height
	 * @param {number} offset
	 */
	constructor(width, height, offset) {
		this.width = width;
		this.height = height;
		this.offset = offset;
	}

	build() {
		return [
			'-size',
			`${this.width}${this.height ? `x${this.height}` : ''}${this.offset ? `+${this.offset}` : ''}`
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Size = Size;
exports.default = Size;
