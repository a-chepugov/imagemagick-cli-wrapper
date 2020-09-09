"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offsetted = exports.Offset = exports.Ratio = exports.Area = exports.Enlarge = exports.Shrink = exports.Emphatically = exports.Minimum = exports.Maximum = exports.Height = exports.Width = exports.ScaleXY = exports.Scale = void 0;
class Scale {
    constructor(scale) {
        this.scale = scale;
    }
    build() {
        return `${this.scale}%`;
    }
}
exports.Scale = Scale;
class ScaleXY {
    constructor(scaleX, scaleY) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }
    build() {
        return `${this.scaleX}%x${this.scaleY}%`;
    }
}
exports.ScaleXY = ScaleXY;
class Width {
    constructor(size) {
        this.size = size;
    }
    build() {
        return `${this.size}`;
    }
}
exports.Width = Width;
class Height {
    constructor(size) {
        this.size = size;
    }
    build() {
        return `x${this.size}`;
    }
}
exports.Height = Height;
class Maximum {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    build() {
        return `${this.sizeX}x${this.sizeY}`;
    }
}
exports.Maximum = Maximum;
class Minimum {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    build() {
        return `${this.sizeX}x${this.sizeY}^`;
    }
}
exports.Minimum = Minimum;
class Emphatically {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    build() {
        return `${this.sizeX}x${this.sizeY}!`;
    }
}
exports.Emphatically = Emphatically;
class Shrink {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    build() {
        return `${this.sizeX}x${this.sizeY}>`;
    }
}
exports.Shrink = Shrink;
class Enlarge {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    build() {
        return `${this.sizeX}x${this.sizeY}<`;
    }
}
exports.Enlarge = Enlarge;
class Area {
    constructor(value) {
        this.value = value;
    }
    build() {
        return `${this.value}@`;
    }
}
exports.Area = Area;
class Ratio {
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    build() {
        return `${this.sizeX}:${this.sizeY}^`;
    }
}
exports.Ratio = Ratio;
class Offset {
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
class Offsetted {
    constructor(size, offset) {
        this.size = size;
        this.offset = offset;
    }
    build() {
        return `${this.size.build()}${this.offset.build()}`;
    }
    inspect() {
        return this.build();
    }
}
exports.Offsetted = Offsetted;
//# sourceMappingURL=Geometry.js.map