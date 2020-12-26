const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Separate {
	build() {
		return ['-separate'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Separate = Separate;
exports.default = Separate;
