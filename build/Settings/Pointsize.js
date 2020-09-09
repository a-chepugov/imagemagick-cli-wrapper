"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointsize = void 0;
class Pointsize {
    constructor(value) {
        this.value = value;
    }
    build() {
        return [
            '-pointsize',
            `${this.value}`
        ];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Pointsize = Pointsize;
exports.default = Pointsize;
//# sourceMappingURL=Pointsize.js.map