"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resize = void 0;
class Resize {
    constructor(geometry) {
        this.geometry = geometry;
    }
    build() {
        return ['-resize', this.geometry.build()];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Resize = Resize;
exports.default = Resize;
//# sourceMappingURL=Resize.js.map