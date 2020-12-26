const Operator = require('./_Operator').Operator;

/**
 * @interface
 * @extends {Operator}
 */
class Annotate {
}

exports.Annotate = Annotate;
exports.default = Annotate;

/**
 * @implements {Annotate}
 */
class Degrees {
	/**
	 * @param {number} degrees
	 * @param {string} text
	 */
	constructor(degrees, text) {
		this.degrees = degrees;
		this.text = text;
	}

	build() {
		return [
			'-annotate',
			`${this.degrees}`,
			this.text
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Degrees = Degrees;

/**
 * @implements {Annotate}
 */
class DegreesXY {
	/**
	 * @param {number} Xdegrees
	 * @param {number} Ydegrees
	 * @param {string} text
	 */
	constructor(Xdegrees, Ydegrees, text) {
		this.Xdegrees = Number.isFinite(Xdegrees) ? Xdegrees : 0;
		this.Ydegrees = Number.isFinite(Ydegrees) ? Ydegrees : 0;
		this.text = text;
	}

	build() {
		return [
			'-annotate',
			`${this.Xdegrees}x${this.Ydegrees}`,
			`${this.text}`
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.DegreesXY = DegreesXY;

/**
 * @implements {Annotate}
 */
class DegreesXYTxTy {
	/**
	 * @param {number} Xdegrees
	 * @param {number} Ydegrees
	 * @param {number} transformX
	 * @param {number} transformY
	 * @param {string} text
	 */
	constructor(Xdegrees, Ydegrees, transformX, transformY, text) {
		this.Xdegrees = Number.isFinite(Xdegrees) ? Xdegrees : 0;
		this.Ydegrees = Number.isFinite(Ydegrees) ? Ydegrees : 0;
		this.transformX = Number.isFinite(transformX) ? transformX : 0;
		this.transformY = Number.isFinite(transformY) ? transformY : 0;
		this.text = text;
	}

	build() {
		return [
			'-annotate',
			`${this.Xdegrees}x${this.Ydegrees}` +
			(this.transformX < 0 ? `${this.transformX}` : `+${this.transformX}`) +
			(this.transformY < 0 ? `${this.transformY}` : `+${this.transformY}`),
			this.text
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.DegreesXYTxTy = DegreesXYTxTy;

/**
 * @implements {Annotate}
 */
class TxTy {
	/**
	 * @param {number} transformX
	 * @param {number} transformY
	 * @param {string} text
	 */
	constructor(transformX, transformY, text) {
		this.transformX = Number.isFinite(transformX) ? transformX : 0;
		this.transformY = Number.isFinite(transformY) ? transformY : 0;
		this.text = text;
	}

	build() {
		return [
			'-annotate',
			(this.transformX < 0 ? `${this.transformX}` : `+${this.transformX}`) +
			(this.transformY < 0 ? `${this.transformY}` : `+${this.transformY}`),
			this.text
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.TxTy = TxTy;
