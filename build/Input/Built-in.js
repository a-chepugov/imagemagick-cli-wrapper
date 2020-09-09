"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Built_in = void 0;
class Built_in {
    constructor(name) {
        this.name = name;
    }
    pipeTo(output) {
    }
    build() {
        return [`pattern:${this.name}`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Built_in = Built_in;
exports.default = Built_in;
//# sourceMappingURL=Built-in.js.map