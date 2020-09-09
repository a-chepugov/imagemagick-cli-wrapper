"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxTy = exports.DegreesXYTxTy = exports.DegreesXY = exports.Degrees = void 0;
class Degrees {
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
class DegreesXY {
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
class DegreesXYTxTy {
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
class TxTy {
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
//# sourceMappingURL=Annotate.js.map