"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strip = void 0;
class Strip {
    build() {
        return ['-strip'];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Strip = Strip;
exports.default = Strip;
//# sourceMappingURL=Strip.js.map