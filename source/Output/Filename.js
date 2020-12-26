const Output = require('./_Output').Output;

/**
 * @implements {Output}
 */
class Filename {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		this.name = name;
	}

	/**
	 * @param {NodeJS.ReadableStream} input
	 */
	pipeFrom(input) {
	}

	build() {
		return [this.name];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Filename = Filename;
exports.default = Filename;
