/**
 * The Anatomy of the Command-line
 * one or more required input filenames.
 * zero, one, or more image settings.
 * zero, one, or more image operators.
 * zero, one, or more image sequence operators.
 * zero, one, or more image stacks.
 * zero or one output image filenames (required by magick, convert, composite, montage, compare, import, conjure).
 */
export * as Input from './Input';
export * as Settings from './Settings';
export * as Operators from './Operators';
export * as ChannelOperators from './ChannelOperators';
export * as SequenceOperators from './SequenceOperators';
export * as Stacks from './StacksOperations';
export * as Output from './Output';

export * as Options from './Options';
export {Convert} from './Convert';

export {FORMATS} from './FORMATS';
export * as Geometry from './Geometry';
