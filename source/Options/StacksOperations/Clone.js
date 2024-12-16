const StacksOperation = require('./_StacksOperation').StacksOperation;

/**
 * @implements {StacksOperation}
 * @description клонирует копию изображения или канала
 * -clone 0 - выполняет клонирование поиндесу
 * +clone - выполняет клонирование последней копии
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
