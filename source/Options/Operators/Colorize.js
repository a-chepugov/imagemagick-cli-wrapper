const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Colorize {
	/**
	 * @param {number} value
	 */
	constructor(value) {
		this.value = value;
	}

	build() {
		return ['-colorize', `${this.value}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Colorize = Colorize;
exports.default = Colorize;
