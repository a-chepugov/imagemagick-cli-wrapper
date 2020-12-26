const Input = require('./_Input').Input;

/**
 * @implements {Input}
 */
class Globbing {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		/** @readonly */
		this.name = name;
	}

	/**
	 * @param {NodeJS.WritableStream} output
	 */
	pipeTo(output) {
	}

	build() {
		return [this.name];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Globbing = Globbing;
exports.default = Globbing;
