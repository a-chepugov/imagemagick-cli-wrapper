const Operator = require('./_Operator').Operator;
const Primitive = require('../../Primitives').Primitive;

/**
 * @implements {Operator}
 */
class Draw {
	/**
	 * @param {Array<Primitive>} primitives - graphic primitives
	 */
	constructor(primitives) {
		this.primitives = primitives;
	}

	build() {
		return ['-draw', `${this.primitives.map((primitive) => primitive.build().join(' ')).join(' ')}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Draw = Draw;
exports.default = Draw;
