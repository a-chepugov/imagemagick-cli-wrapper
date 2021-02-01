const Fx = require("./Expressions/Fx").Fx;

/**
 * @interface
 */
class Geometry {
	/**
	 * @returns {string}
	 */
	build() {
		throw new Error('not implemented');
	}
}

exports.Geometry = Geometry;

exports.default = Geometry;

/**
 * @implements {Geometry}
 */
class Scale {
	/**
	 * @param {number|Fx} scale
	 */
	constructor(scale) {
		this.scale = scale;
	}

	build() {
		return `${this.scale}%`;
	}
}

exports.Scale = Scale;

/**
 * @implements {Geometry}
 */
class ScaleXY {

	/**
	 * @param {number|Fx} scaleX
	 * @param {number|Fx} scaleY
	 */
	constructor(scaleX, scaleY) {
		this.scaleX = scaleX;
		this.scaleY = scaleY;
	}

	build() {
		return `${this.scaleX}%x${this.scaleY}%`;
	}
}

exports.ScaleXY = ScaleXY;

/**
 * @implements {Geometry}
 */
class Width {
	/**
	 * @param {number|Fx} size
	 */
	constructor(size) {
		this.size = size;
	}

	build() {
		return `${this.size}`;
	}
}

exports.Width = Width;

/**
 * @implements {Geometry}
 */
class Height {
	/**
	 * @param {number|Fx} size
	 */
	constructor(size) {
		this.size = size;
	}

	build() {
		return `x${this.size}`;
	}
}

exports.Height = Height;

/**
 * @implements {Geometry}
 */
class Maximum {
	/**
	 * @param {number|Fx} sizeX
	 * @param {number|Fx} sizeY
	 */
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}`;
	}
}

exports.Maximum = Maximum;

/**
 * @implements {Geometry}
 */
class Minimum {
	/**
	 * @param {number|Fx} sizeX
	 * @param {number|Fx} sizeY
	 */
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}^`;
	}
}

exports.Minimum = Minimum;

/**
 * @implements {Geometry}
 */
class Emphatically {
	/**
	 * @param {number|Fx} sizeX
	 * @param {number|Fx} sizeY
	 */
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}!`;
	}
}

exports.Emphatically = Emphatically;

/**
 * @implements {Geometry}
 */
class Shrink {
	/**
	 * @param {number|Fx} sizeX
	 * @param {number|Fx} sizeY
	 */
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}>`;
	}
}

exports.Shrink = Shrink;

/**
 * @implements {Geometry}
 */
class Enlarge {
	/**
	 * @param {number|Fx} sizeX
	 * @param {number|Fx} sizeY
	 */
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}<`;
	}
}

exports.Enlarge = Enlarge;

/**
 * @implements {Geometry}
 */
class Area {
	/**
	 * @param {number|Fx} value
	 */
	constructor(value) {
		this.value = value;
	}

	build() {
		return `${this.value}@`;
	}
}

exports.Area = Area;

/**
 * @implements {Geometry}
 */
class Ratio {
	/**
	 * @param {number|Fx} sizeX
	 * @param {number|Fx} sizeY
	 */
	constructor(sizeX, sizeY) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}:${this.sizeY}`;
	}
}

exports.Ratio = Ratio;

class Offset {
	/**
	 * @param {number|Fx} offsetX
	 * @param {number|Fx} offsetY
	 */
	constructor(offsetX = 0, offsetY = 0) {
		this.offsetX = offsetX;
		this.offsetY = offsetY;
	}

	build() {
		return `${this.offsetX < 0 ? this.offsetX : `+${this.offsetX}`}${this.offsetY < 0 ? this.offsetY : `+${this.offsetY}`}`;
	}

	inspect() {
		return this.build();
	}
}

exports.Offset = Offset;

/**
 * @implements {Geometry}
 */
class Offsetted {
	/**
	 * @param {Geometry} size
	 * @param {Offset} offset
	 */
	constructor(size = undefined, offset = undefined) {
		this.size = size;
		this.offset = offset;
	}

	build() {
		return `${this.size ? this.size.build() : ''}${this.offset ? this.offset.build() : ''}`;
	}

	inspect() {
		return this.build();
	}
}

exports.Offsetted = Offsetted;
