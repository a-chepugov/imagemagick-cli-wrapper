const SequenceOperator = require('./_SequenceOperator').SequenceOperator;

/**
 * @implements {SequenceOperator}
 */
class Set {
	/**
	 * @param {string} key
	 * @param {string} value
	 */
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}

	build() {
		const params = [
			`${this.value === undefined ? '+' : '-'}set`,
			this.key
		];
		if (this.value !== undefined) {
			params.push(this.value);
		}
		return params;
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Set = Set;
exports.default = Set;
