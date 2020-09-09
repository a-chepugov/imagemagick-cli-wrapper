"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = exports.Shear = void 0;
var Shear;
(function (Shear) {
    Shear[">"] = ">";
    Shear["<"] = "<";
})(Shear = exports.Shear || (exports.Shear = {}));
class Rotate {
    constructor(degrees, shear) {
        this.degrees = degrees;
        this.shear = shear;
    }
    build() {
        return ['-rotate', `${this.degrees}${this.shear ? this.shear : ''}`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Rotate = Rotate;
exports.default = Rotate;
//# sourceMappingURL=Rotate.js.map