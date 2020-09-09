"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Font = void 0;
class Font {
    constructor(name) {
        this.name = name;
    }
    build() {
        return ['-font', this.name];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Font = Font;
exports.default = Font;
//# sourceMappingURL=Font.js.map