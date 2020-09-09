"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interlace = exports.Type = void 0;
var Type;
(function (Type) {
    Type["none"] = "none";
    Type["line"] = "line";
    Type["plane"] = "plane";
    Type["partition"] = "partition";
    Type["JPEG"] = "JPEG";
    Type["GIF"] = "GIF";
    Type["PNG"] = "PNG";
})(Type = exports.Type || (exports.Type = {}));
class Interlace {
    constructor(type) {
        this.type = type;
    }
    build() {
        return ['-interlace', this.type];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Interlace = Interlace;
exports.default = Interlace;
//# sourceMappingURL=Interlace.js.map