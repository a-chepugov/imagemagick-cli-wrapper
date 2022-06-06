const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Modulate {
	/**
	 * @param {number} [brightness=100]
	 * @param {number} [saturation=100]
	 * @param {number} [hue=100]
	 */
	constructor(brightness, saturation, hue) {
		/** @private */
		this.brightness = Number.isFinite(brightness) ? Math.trunc(brightness) : 100;
		/** @private */
		this.saturation = Number.isFinite(saturation) ? Math.trunc(saturation) : 100;
		/** @private */
		this.hue = Number.isFinite(hue) ? Math.trunc(hue) : 100;

		Object.freeze(this);
	}

	build() {
		return [
			'-modulate',
			[
				this.brightness,
				this.saturation,
				this.hue,
			].join(',')
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Modulate = Modulate;
exports.default = Modulate;

