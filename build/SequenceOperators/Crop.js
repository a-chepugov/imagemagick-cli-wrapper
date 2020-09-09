"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crop = void 0;
class Crop {
    constructor(geometry, tiles = false, emphatically = false) {
        this.geometry = geometry;
        this.tiles = tiles;
        this.emphatically = emphatically;
    }
    build() {
        return [
            '-crop',
            this.geometry.build() + (this.tiles ? '@' : '') + (this.emphatically ? '!' : '')
        ];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Crop = Crop;
exports.default = Crop;
//# sourceMappingURL=Crop.js.map