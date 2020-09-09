"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Append = void 0;
class Append {
    constructor(horizontally) {
        this.horizontally = horizontally;
    }
    build() {
        return [`${this.horizontally ? '+' : '-'}append`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Append = Append;
exports.default = Append;
//# sourceMappingURL=Append.js.map