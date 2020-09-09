"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explicit = void 0;
class Explicit {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    pipeFrom(input) {
    }
    build() {
        return [`${this.type}:${this.name}`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Explicit = Explicit;
exports.default = Explicit;
//# sourceMappingURL=Explicit.js.map