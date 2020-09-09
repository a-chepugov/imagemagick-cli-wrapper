"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filename = void 0;
class Filename {
    constructor(name) {
        this.name = name;
    }
    pipeFrom(input) {
    }
    build() {
        return [this.name];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Filename = Filename;
exports.default = Filename;
//# sourceMappingURL=Filename.js.map