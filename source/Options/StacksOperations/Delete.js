const StacksOperation = require('./_StacksOperation').StacksOperation;

/**
 * @implements {StacksOperation}
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
