const Option = require('./Option').Option;

/**
 * @description Options aggregator
 */
class Options {
	constructor() {
		/**
		 * @readonly
		 * @type {Array<Option>}
		 * */
		this.options = [];
	}

	/**
	 * @param {Option} option
	 */
	push(option) {
		this.options.push(option);
		return this;
	}

	/**
	 * @param {Option} option
	 */
	unshift(option) {
		this.options.unshift(option);
		return this;
	}

	/**
	 * @param {Array<Option>} options
	 */
	append(options) {
		this.options.splice(this.options.length, 0, ...options);
		return this;
	}

	/**
	 * @param {Array<Option>} options
	 */
	prepend(options) {
		this.options.splice(0, 0, ...options);
		return this;
	}

	/**
	 * @param {Array<Option>} options
	 */
	static of(options) {
		return (new Options())
			.append(options);
	}

	build() {
		return this.options.reduce((result, option) => result.concat(option.build()), []);
	}

	inspect() {
		return this.build().join(' ');
	}

	* [Symbol.iterator]() {
		return yield * this.options;
	}
}

exports.Options = Options;
exports.default = Options;
