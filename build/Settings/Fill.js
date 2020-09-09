"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fill = void 0;
class Fill {
    constructor(color) {
        this.color = color;
    }
    build() {
        return ['-fill', this.color];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Fill = Fill;
exports.default = Fill;
//# sourceMappingURL=Fill.js.map