'use strict';
const {Clone, Delete} = require('./Options/SequenceOperators');
const Option = require('./Options/Option').Option;
const Options = require('./Options/Options').Options;
const Input = require('./Input').Input;
const Output = require('./Output').Output;

/**
 * @description `Magick` command builder
 */
class Magick {
	constructor() {
		/**
		 * @protected
		 */
		this.options = new Options();
	}

	/**
	 * @param {Input} input
	 */
	from(input) {
		this.input = input;
		return this;
	}

	/**
	 * @param {Output} output
	 */
	into(output) {
		this.output = output;
		return this;
	}

	/**
	 * @param {Option} option
	 */
	with(option) {
		this.options.push(option);
		return this;
	}

	/**
	 * @param {Array<Option>} options
	 */
	append(options) {
		this.options.append(options);
		return this;
	}

	/**
	 * @param {Array<Option>} options
	 */
	fork(options) {
		const thread = new Clone(undefined, options.concat(new Delete()));
		this.options.push(thread);
		return this;
	}

	build() {
		if (this.input && this.output) {
			return ['magick'].concat(this.input.build(), this.options.build(), this.output.build());
		} else {
			throw new Error('Invalid input/output data for conversion');
		}
	}

	inspect() {
		return this.build().join(' ');
	}

	/**
	 * @param {Input} input
	 */
	static of(input) {
		return new Magick().from(input);
	}
}

exports.Magick = Magick;
exports.default = Magick;
