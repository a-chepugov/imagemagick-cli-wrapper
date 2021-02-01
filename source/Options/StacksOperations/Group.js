const Item = require('../../Item.js').Item;

/**
 * @implements {Item}
 */
class Group {
	/**
	 * @param {Array<Item>} items
	 */
	constructor(items) {
		this._items = items;
	}

	build() {
		return ['(', ...(this._items.map((item) => item.build()).flat()), ')'];
	}

	inspect() {
		return ['(', ...(this._items.map((item) => item.inspect()).flat()), ')'].join(' ');
	}
}

exports.Group = Group;
exports.default = Group;
