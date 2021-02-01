const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Composite {
	build() {
		return ['-composite'];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Composite = Composite;
exports.default = Composite;
