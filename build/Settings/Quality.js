"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quality = void 0;
class Quality {
    constructor(value) {
        this.value = value;
    }
    build() {
        return ['-quality', `${this.value}`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Quality = Quality;
exports.default = Quality;
//# sourceMappingURL=Quality.js.map