const Output = require('./_Output').Output;
const FORMATS = require('../FORMATS').FORMATS;

/**
 * @implements {Output}
 */
class Explicit {
	/**
	 * @param {string} name
	 * @param {FORMATS} type
	 */
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	/**
	 * @param {NodeJS.ReadableStream} input
	 */
	pipeFrom(input) {
	}

	build() {
		return [`${this.type}:${this.name}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Explicit = Explicit;
exports.default = Explicit;
