const Operator = require('./_Operator').Operator;

/**
 * @implements {Operator}
 */
class BrightnessContrast {
	/**
	 * @param {number} [brightness=0]
	 * @param {number} [contrast=0]
	 */
	constructor(brightness, contrast) {
		/** @private */
		this.brightness = Number.isFinite(brightness) ? Math.trunc(brightness) : 0;
		/** @private */
		this.contrast = Number.isFinite(contrast) ? Math.trunc(contrast) : 0;

		Object.freeze(this);
	}

	build() {
		return [
			'-brightness-contrast',
			[
				this.brightness,
				this.contrast,
			].join('x')
		];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.BrightnessContrast = BrightnessContrast;
exports.default = BrightnessContrast;

