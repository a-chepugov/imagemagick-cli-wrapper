"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
class Options {
    constructor() {
        this.options = [];
    }
    push(option) {
        this.options.push(option);
        return this;
    }
    unshift(operation) {
        this.options.unshift(operation);
        return this;
    }
    append(options) {
        this.options.splice(this.options.length, 0, ...options);
        return this;
    }
    prepend(options) {
        this.options.splice(0, 0, ...options);
        return this;
    }
    static of(options) {
        return (new Options())
            .append(options);
    }
    build() {
        return this.options.reduce((result, option) => result.concat(option.build()), []);
    }
    inspect() {
        return this.options.reduce((result, option) => result.concat(option.inspect()), []);
    }
}
exports.Options = Options;
exports.default = Options;
//# sourceMappingURL=Options.js.map