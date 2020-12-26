const FORMATS = require('../FORMATS');
const Input = require('./_Input').Input;

/**
 * @implements {Input}
 */
class STDIN {
	/**
	 * @param {NodeJS.ReadableStream} input
	 * @param {FORMATS} type
	 */
	constructor(input, type) {
		/** @readonly */
		this.input = input;
		/** @readonly */
		this.type = type;
	}

	/**
	 * @param {NodeJS.WritableStream} output
	 */
	pipeTo(output) {
		return this.input.pipe(output);
	}

	build() {
		return [`${this.type}:-`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.STDIN = STDIN;
exports.default = STDIN;
