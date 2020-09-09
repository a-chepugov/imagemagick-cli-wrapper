"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
class Write {
    constructor(filename) {
        this.filename = filename;
    }
    build() {
        return ['-write', this.filename];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Write = Write;
exports.default = Write;
//# sourceMappingURL=Write.js.map