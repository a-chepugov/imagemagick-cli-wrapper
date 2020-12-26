const Setting = require('./_Setting').Setting;

/**
 * @enum {string}
 */
const Type = {
	None: 'None',
	Center: 'Center',
	East: 'East',
	Forget: 'Forget',
	NorthEast: 'NorthEast',
	North: 'North',
	NorthWest: 'NorthWest',
	SouthEast: 'SouthEast',
	South: 'South',
	SouthWest: 'SouthWest',
	West: 'West'
};

Object.freeze(Type);

exports.Type = Type;

/**
 * @implements {Setting}
 */
class Gravity {
	/**
	 * @param {Type} type
	 */
	constructor(type) {
		this.type = type;
	}

	build() {
		return ['-gravity', `${this.type}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Gravity = Gravity;
exports.default = Gravity;
