const Setting = require('./_Setting').Setting;

/**
 * @enum {string}
 */
const Type = {
	CMY: 'CMY',
	CMYK: 'CMYK',
	Gray: 'Gray',
	HCL: 'HCL',
	HCLp: 'HCLp',
	HSB: 'HSB',
	HSI: 'HSI',
	HSL: 'HSL',
	HSV: 'HSV',
	HWB: 'HWB',
	Jzazbz: 'Jzazbz',
	Lab: 'Lab',
	LCHab: 'LCHab',
	LCHuv: 'LCHuv',
	LMS: 'LMS',
	Log: 'Log',
	Luv: 'Luv',
	OHTA: 'OHTA',
	Rec601YCbCr: 'Rec601YCbCr',
	Rec709YCbCr: 'Rec709YCbCr',
	RGB: 'RGB',
	scRGB: 'scRGB',
	sRGB: 'sRGB',
	Transparent: 'Transparent',
	xyY: 'xyY',
	XYZ: 'XYZ',
	YCbCr: 'YCbCr',
	YCC: 'YCC',
	YDbDr: 'YDbDr',
	YIQ: 'YIQ',
	YPbPr: 'YPbPr',
	YUV: 'YUV',
	Undefined: 'Undefined'
};
Object.freeze(Type);

exports.Type = Type;

/**
 * @implements {Setting}
 */
class Colorspace {
	/**
	 * @param {Type} value
	 */
	constructor(value) {
		this.value = value;
	}

	build() {
		return ['-colorspace', this.value];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Colorspace = Colorspace;
exports.default = Colorspace;
