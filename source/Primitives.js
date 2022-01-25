/**
 * @interface
 */
class XY {
	/**
	 * @param {number} x
	 * @param {number} y
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
		Object.freeze(this);
	}
}

/**
 * @interface
 */
class Primitive {
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

exports.Primitive = Primitive;
exports.default = Primitive;

/**
 * Point primitive
 * @implements {Primitive}
 */
class Point {
	/**
	 * @param {XY} coordinate
	 */
	constructor(coordinate) {
		this.coordinate = coordinate;
	}

	build() {
		return ['line', `${this.coordinate.x},${this.coordinate.y}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Point = Point;

/**
 * Polygon primitive
 * @implements {Primitive}
 */
class Polygon {
	/**
	 * @param {Array<XY>} coordinates
	 */
	constructor(coordinates) {
		this.coordinates = coordinates;
	}

	build() {
		return ['polygon', `${this.coordinates.map((coordinate) => `${coordinate.x},${coordinate.y}`).join(' ')}`];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Polygon = Polygon;
