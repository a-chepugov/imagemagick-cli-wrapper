const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Delete {
	/**
	 * @param {string} index
	 */
	constructor(index = undefined) {
		this.index = index;
	}

	build() {
		return [`${this.index === undefined ? '+' : '-'}delete`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Delete = Delete;
exports.default = Delete;
