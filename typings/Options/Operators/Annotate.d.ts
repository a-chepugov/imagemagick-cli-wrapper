export default Annotate;
/**
 * @interface
 * @extends {Operator}
 */
export class Annotate {
}
/**
 * @implements {Annotate}
 */
export class Degrees implements Annotate {
    /**
     * @param {number} degrees
     * @param {string} text
     */
    constructor(degrees: number, text: string);
    degrees: number;
    text: string;
    build(): string[];
    inspect(): string;
}
/**
 * @implements {Annotate}
 */
export class DegreesXY implements Annotate {
    /**
     * @param {number} Xdegrees
     * @param {number} Ydegrees
     * @param {string} text
     */
    constructor(Xdegrees: number, Ydegrees: number, text: string);
    Xdegrees: number;
    Ydegrees: number;
    text: string;
    build(): string[];
    inspect(): string;
}
/**
 * @implements {Annotate}
 */
export class DegreesXYTxTy implements Annotate {
    /**
     * @param {number} Xdegrees
     * @param {number} Ydegrees
     * @param {number} transformX
     * @param {number} transformY
     * @param {string} text
     */
    constructor(Xdegrees: number, Ydegrees: number, transformX: number, transformY: number, text: string);
    Xdegrees: number;
    Ydegrees: number;
    transformX: number;
    transformY: number;
    text: string;
    build(): string[];
    inspect(): string;
}
/**
 * @implements {Annotate}
 */
export class TxTy implements Annotate {
    /**
     * @param {number} transformX
     * @param {number} transformY
     * @param {string} text
     */
    constructor(transformX: number, transformY: number, text: string);
    transformX: number;
    transformY: number;
    text: string;
    build(): string[];
    inspect(): string;
}
