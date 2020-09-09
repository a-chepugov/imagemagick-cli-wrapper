"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STDIN = void 0;
class STDIN {
    constructor(input, type) {
        this.input = input;
        this.type = type;
    }
    pipeTo(output) {
        return this.input.pipe(output);
    }
    build() {
        return [`${this.type}:-`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.STDIN = STDIN;
exports.default = STDIN;
//# sourceMappingURL=STDIN.js.map