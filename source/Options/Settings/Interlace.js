const Setting = require('./_Setting').Setting;

/**
 * @enum {string}
 */
const Type = {
	none: 'none',
	line: 'line',
	plane: 'plane',
	partition: 'partition',
	JPEG: 'JPEG',
	GIF: 'GIF',
	PNG: 'PNG'
};

Object.freeze(Type);

exports.Type = Type;

/**
 * @implements {Setting}
 */
class Interlace {
	/**
	 * @param {Type} type
	 */
	constructor(type) {
		this.type = type;
	}

	build() {
		return ['-interlace', this.type];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Interlace = Interlace;
exports.default = Interlace;
