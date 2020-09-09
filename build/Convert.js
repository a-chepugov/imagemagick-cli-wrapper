"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
const SequenceOperators_1 = require("./SequenceOperators");
const Options_1 = require("./Options");
class Convert {
    constructor() {
        this.options = [];
    }
    from(input) {
        this.input = input;
        return this;
    }
    into(output) {
        this.output = output;
        return this;
    }
    with(operation) {
        this.options.push(operation);
        return this;
    }
    append(operations) {
        this.options.splice(this.options.length, 0, ...operations);
        return this;
    }
    fork(operations) {
        const thread = new SequenceOperators_1.Clone(undefined, operations.concat(new SequenceOperators_1.Delete()));
        this.options.push(thread);
        return this;
    }
    inspect() {
        return Options_1.Options.of([this.input, ...this.options, this.output]).inspect();
    }
    build() {
        if (this.input && this.output) {
            return ['convert'].concat(Options_1.Options.of([this.input, ...this.options, this.output]).build());
        }
        else {
            throw new Error('Invalid input/output data for conversion');
        }
    }
    static of(input) {
        return new Convert().from(input);
    }
}
exports.Convert = Convert;
exports.default = Convert;
//# sourceMappingURL=Convert.js.map