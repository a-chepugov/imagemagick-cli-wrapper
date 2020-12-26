const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Strip {
	build() {
		return ['-strip'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Strip = Strip;
exports.default = Strip;
