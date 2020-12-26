const Input = require('./_Input').Input;

/**
 * @implements {Input}
 */
class BuiltIn {
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
		return [`pattern:${this.name}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.BuiltIn = BuiltIn;
exports.default = BuiltIn;
