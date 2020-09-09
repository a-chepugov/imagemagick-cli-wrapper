"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Antialias = void 0;
class Antialias {
    constructor(disable) {
        this.disable = disable;
    }
    build() {
        return [`${this.disable ? '+' : '-'}antialias`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Antialias = Antialias;
exports.default = Antialias;
//# sourceMappingURL=Antialias.js.map