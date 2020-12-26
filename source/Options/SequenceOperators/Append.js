const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Append {
	/**
	 * @param {boolean} horizontally
	 */
	constructor(horizontally) {
		this.horizontally = horizontally;
	}

	build() {
		return [`${this.horizontally ? '+' : '-'}append`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Append = Append;
exports.default = Append;
