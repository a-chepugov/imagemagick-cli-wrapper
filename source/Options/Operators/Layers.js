const Operator = require('./_Operator').Operator;

/**
 * @enum {string}
 */
const Method = {
	Coalesce: 'Coalesce',
	CompareAny: 'CompareAny',
	CompareClear: 'CompareClear',
	CompareOverlay: 'CompareOverlay',
	Dispose: 'Dispose',
	Optimize: 'Optimize',
	OptimizeFrame: 'OptimizeFrame',
	OptimizePlus: 'OptimizePlus',
	OptimizeTransparency: 'OptimizeTransparency',
	RemoveDups: 'RemoveDups',
	RemoveZero: 'RemoveZero',
	Composite: 'Composite',
	Merge: 'Merge',
	Flatten: 'Flatten',
	Mosaic: 'Mosaic',
	TrimBounds: 'TrimBounds',
};
Object.freeze(Method);

exports.Method = Method;

/**
 * @implements {Operator}
 */
class Layers {
	/**
	 * @param {Method} method
	 */
	constructor(method) {
		this.method = method;
	}

	build() {
		return ['-layers', this.method];
	}

	inspect() {
		return this.build().join(' ');
	}
}

exports.Layers = Layers;
exports.default = Layers;
