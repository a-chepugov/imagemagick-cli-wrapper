/**
 * The Anatomy of the Command-line
 * one or more required input filenames.
 * zero, one, or more image settings.
 * zero, one, or more image operators.
 * zero, one, or more image sequence operators.
 * zero, one, or more image stacks.
 * zero or one output image filenames (required by magick, convert, composite, montage, compare, import, conjure).
 */
exports.Input = require('./Input');
exports.Settings = require('./Options/Settings');
exports.Operators = require('./Options/Operators');
exports.ChannelOperators = require('./Options/ChannelOperators');
exports.SequenceOperators = require('./Options/SequenceOperators');
exports.StacksOperations = require('./Options/StacksOperations');
exports.Output = require('./Output');

const Option = require('./Options/Option').Option;
exports.Option = Option;
exports.Options = require('./Options/Options').Options;

const Item = require('./Item').Item;
exports.Item = Item;

const Convert = require('./Convert').Convert;
exports.Convert = Convert

const Magick = require('./Magick').Magick;
exports.Magick = Magick

exports.FORMATS = require('./FORMATS').FORMATS;
exports.Geometry = require('./Geometry');

exports.Expressions = require('./Expressions');
