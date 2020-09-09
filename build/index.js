"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Anatomy of the Command-line
 * one or more required input filenames.
 * zero, one, or more image settings.
 * zero, one, or more image operators.
 * zero, one, or more image sequence operators.
 * zero, one, or more image stacks.
 * zero or one output image filenames (required by magick, convert, composite, montage, compare, import, conjure).
 */
exports.Input = require("./Input");
exports.Settings = require("./Settings");
exports.Operators = require("./Operators");
exports.ChannelOperators = require("./ChannelOperators");
exports.SequenceOperators = require("./SequenceOperators");
exports.Stacks = require("./StacksOperations");
exports.Output = require("./Output");
exports.Options = require("./Options");
var Convert_1 = require("./Convert");
Object.defineProperty(exports, "Convert", { enumerable: true, get: function () { return Convert_1.Convert; } });
var FORMATS_1 = require("./FORMATS");
Object.defineProperty(exports, "FORMATS", { enumerable: true, get: function () { return FORMATS_1.FORMATS; } });
exports.Geometry = require("./Geometry");
//# sourceMappingURL=index.js.map