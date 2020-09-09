"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clone = void 0;
class Clone {
    constructor(index, items) {
        this.index = index;
        this.items = items;
    }
    build() {
        const parameters = [
            '(',
            `${this.index === undefined ? '+' : '-'}clone`,
        ];
        if (this.index) {
            parameters.push(`${this.index}`);
        }
        return parameters.concat(...this.items.map((item) => item.build()), ')');
    }
    inspect() {
        const parameters = [
            '( ',
            `${this.index === undefined ? '+' : '-'}clone`,
        ];
        if (this.index) {
            parameters.push(`${this.index}`);
        }
        parameters.push(': ');
        parameters.push(...this.items.map((i) => i.inspect()).join(' | '));
        parameters.push(' )');
        return parameters.join('');
    }
}
exports.Clone = Clone;
exports.default = Clone;
//# sourceMappingURL=Clone.js.map