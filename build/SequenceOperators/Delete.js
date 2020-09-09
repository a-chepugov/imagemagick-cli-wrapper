"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
class Delete {
    constructor(index) {
        this.index = index;
    }
    build() {
        return [`${this.index === undefined ? '+' : '-'}delete`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Delete = Delete;
exports.default = Delete;
//# sourceMappingURL=Delete.js.map