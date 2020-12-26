const Item = require('../Item').Item;

/**
 * @interface
 */
class Input extends Item {
	/**
	 * @param {NodeJS.WritableStream} output
	 */
	pipeTo(output) {
		throw new Error('not implemented');
	}
}

exports.Input = Input;
exports.default = Input;
