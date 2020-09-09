"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gravity = exports.Type = void 0;
var Type;
(function (Type) {
    Type["None"] = "None";
    Type["Center"] = "Center";
    Type["East"] = "East";
    Type["Forget"] = "Forget";
    Type["NorthEast"] = "NorthEast";
    Type["North"] = "North";
    Type["NorthWest"] = "NorthWest";
    Type["SouthEast"] = "SouthEast";
    Type["South"] = "South";
    Type["SouthWest"] = "SouthWest";
    Type["West"] = "West";
})(Type = exports.Type || (exports.Type = {}));
class Gravity {
    constructor(type) {
        this.type = type;
    }
    build() {
        return ['-gravity', `${this.type}`];
    }
    inspect() {
        return this.build().join(' ');
    }
}
exports.Gravity = Gravity;
exports.default = Gravity;
//# sourceMappingURL=Gravity.js.map