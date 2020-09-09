"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
class Monitor {
    build() {
        return ['-monitor'];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Monitor = Monitor;
exports.default = Monitor;
//# sourceMappingURL=Monitor.js.map