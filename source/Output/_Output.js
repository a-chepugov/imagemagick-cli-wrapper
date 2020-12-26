const Item = require('../Item').Item;

/**
 * @interface
 */
class Output extends Item {
	/**
	 * @param {NodeJS.ReadableStream} input
	 */
	pipeFrom(input) {
	}
}

exports.Output = Output;
exports.default = Output;
