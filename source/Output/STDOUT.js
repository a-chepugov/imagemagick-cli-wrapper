const Output = require('./_Output').Output;
const FORMATS = require('../FORMATS').FORMATS;

/**
 * @implements {Output}
 */
class STDOUT {
	/**
	 * @param {NodeJS.WritableStream} output
	 * @param {FORMATS} type
	 */
	constructor(output, type) {
		this.output = output;
		this.type = type;
	}

	/**
	 * @param {NodeJS.ReadableStream} input
	 */
	pipeFrom(input) {
		return input.pipe(this.output);
	}

	build() {
		return [`${this.type}:-`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.STDOUT = STDOUT;
exports.default = STDOUT;
