"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repage = void 0;
class Repage {
    constructor(geometry) {
        this.geometry = geometry;
    }
    build() {
        const result = [`${this.geometry ? '-' : '+'}repage`];
        if (this.geometry) {
            result.push(this.geometry.build());
        }
        return result;
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Repage = Repage;
exports.default = Repage;
//# sourceMappingURL=Repage.js.map