const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Flip {
	build() {
		return ['-flip'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Flip = Flip;
exports.default = Flip;
