const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Write {
	/**
	 * @param {string} filename
	 */
	constructor(filename) {
		this.filename = filename;
	}

	build() {
		return ['-write', this.filename];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Write = Write;
exports.default = Write;
