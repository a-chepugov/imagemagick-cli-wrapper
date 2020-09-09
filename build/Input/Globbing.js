"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globbing = void 0;
class Globbing {
    constructor(name) {
        this.name = name;
    }
    pipeTo(output) {
    }
    build() {
        return [this.name];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Globbing = Globbing;
exports.default = Globbing;
//# sourceMappingURL=Globbing.js.map