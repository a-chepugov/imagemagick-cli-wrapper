"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STDOUT = void 0;
class STDOUT {
    constructor(output, type) {
        this.output = output;
        this.type = type;
    }
    pipeFrom(input) {
        return input.pipe(this.output);
    }
    build() {
        return [`${this.type}:-`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.STDOUT = STDOUT;
exports.default = STDOUT;
//# sourceMappingURL=STDOUT.js.map