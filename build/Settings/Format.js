"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
class Format {
    constructor(string) {
        this.string = string;
    }
    build() {
        return ['-format', this.string];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Format = Format;
exports.default = Format;
//# sourceMappingURL=Format.js.map