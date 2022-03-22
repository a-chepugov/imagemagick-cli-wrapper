const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class AutoOrient {
	build() {
		return ['-auto-orient'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.AutoOrient = AutoOrient;
exports.default = AutoOrient;
