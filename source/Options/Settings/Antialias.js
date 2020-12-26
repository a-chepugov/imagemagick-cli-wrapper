const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Antialias {
	constructor(disable = false) {
		this.disable = disable;
	}

	build() {
		return [`${this.disable ? '+' : '-'}antialias`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Antialias = Antialias;
exports.default = Antialias;
