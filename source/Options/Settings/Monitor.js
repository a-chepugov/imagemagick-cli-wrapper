const Setting = require('./_Setting').Setting;

/**
 * @implements {Setting}
 */
class Monitor {
	build() {
		return ['-monitor'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Monitor = Monitor;
exports.default = Monitor;
