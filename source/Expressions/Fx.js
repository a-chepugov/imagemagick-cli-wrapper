/**
 * @description fx expression builder
 */
class Fx {
	/**
	 * @param {string} expression
	 */
	constructor(expression) {
		/** @private */
		this.expression = expression;
	}

	toString() {
		return `%[fx:${this.expression}]`;
	}
}

exports.Fx = Fx;
exports.default = Fx;
