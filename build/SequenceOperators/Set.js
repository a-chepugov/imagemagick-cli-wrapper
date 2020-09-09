"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Set = void 0;
class Set {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    build() {
        const params = [
            `${this.value === undefined ? '+' : '-'}set`,
            this.key
        ];
        if (this.value !== undefined) {
            params.push(this.value);
        }
        return params;
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Set = Set;
exports.default = Set;
//# sourceMappingURL=Set.js.map