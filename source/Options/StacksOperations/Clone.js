const StacksOperation = require('./_StacksOperation').StacksOperation;

/**
 * @implements {StacksOperation}
 */
class Clone {
	/**
	 * @param {string | number} index
	 */
	constructor(index = undefined) {
		this.index = index;
	}

	build() {
		return this.index === undefined ?
			['+clone'] :
			['-clone', `${this.index}`];
	}

	inspect() {
		return this.build().join('');
	}
}

exports.Clone = Clone;
exports.default = Clone;
