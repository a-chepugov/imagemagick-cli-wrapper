"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
class Size {
    constructor(width, height, offset) {
        this.width = width;
        this.height = height;
        this.offset = offset;
    }
    build() {
        return [
            '-size',
            `${this.width}${this.height ? `x${this.height}` : ''}${this.offset ? `+${this.offset}` : ''}`
        ];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Size = Size;
exports.default = Size;
//# sourceMappingURL=Size.js.map