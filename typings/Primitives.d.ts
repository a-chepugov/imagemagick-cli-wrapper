export default Primitive;
/**
 * @interface
 */
export class Primitive {
    /**
     * @returns {Array<string>}
     */
    build(): Array<string>;
    /**
     * @returns {string}
     */
    inspect(): string;
}
/**
 * Point primitive
 * @implements {Primitive}
 */
export class Point implements Primitive {
    /**
     * @param {XY} coordinate
     */
    constructor(coordinate: XY);
    coordinate: XY;
    build(): string[];
    inspect(): string;
}
/**
 * Polygon primitive
 * @implements {Primitive}
 */
export class Polygon implements Primitive {
    /**
     * @param {Array<XY>} coordinates
     */
    constructor(coordinates: Array<XY>);
    coordinates: XY[];
    build(): string[];
    inspect(): string;
}
/**
 * @interface
 */
declare class XY {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x: number, y: number);
    x: number;
    y: number;
}
