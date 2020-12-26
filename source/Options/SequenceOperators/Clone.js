const SequenceOperator = require('./_SequenceOperator').SequenceOperator;
const Option= require('../Option').Option;

/**
 * @implements {SequenceOperator}
 */
class Clone {
	/**
	 * @param {string | undefined} index
	 * @param {Array<Option>} options
	 */
	constructor(index, options) {
		this.index = index;
		this.options = options;
	}

	build() {
		const parameters = [
			'(',
			`${this.index === undefined ? '+' : '-'}clone`
		];
		if (this.index) {
			parameters.push(`${this.index}`);
		}
		return parameters.concat(...this.options.map((option) => option.build()), ')');
	}

	inspect() {
		const parameters = [
			'( ',
			`${this.index === undefined ? '+' : '-'}clone`
		];
		if (this.index) {
			parameters.push(`${this.index}`);
		}
		parameters.push(': ');
		parameters.push(...this.options.map((i) => i.inspect()).join(' | '));
		parameters.push(' )');
		return parameters.join('');
	}
}

exports.Clone = Clone;
exports.default = Clone;
