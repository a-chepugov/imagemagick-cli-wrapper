/**
 * @interface
 */
class Item {
	/**
	 * @returns {Array<string>}
	 */
	build() {
		throw new Error('not implemented');
	}

	/**
	 * @returns {string}
	 */
	inspect() {
		throw new Error('not implemented');
	}
}

exports.Item = Item;
exports.default = Item;
