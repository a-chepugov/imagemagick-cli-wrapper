const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class Modulate {
	/**
	 * @param {number} brightness
	 * @param {number=} saturation
	 * @param {number=} hue
	 */
	constructor(brightness, saturation, hue) {
		/** @private */
		this.brightness = brightness;
		/** @private */
		this.saturation = saturation;
		/** @private */
		this.hue = hue;
	}

	build() {
		return [
			'-modulate',
			`${this.brightness}` +
			this.saturation !== undefined ? `,${this.saturation}` : '' +
			this.hue !== undefined ? `,${this.hue}` : ''
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Modulate = Modulate;
exports.default = Modulate;
