export default Geometry;
/**
 * @interface
 */
export class Geometry {
    /**
     * @returns {string}
     */
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Scale implements Geometry {
    /**
     * @param {number} scale
     */
    constructor(scale: number);
    scale: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class ScaleXY implements Geometry {
    /**
     * @param {number} scaleX
     * @param {number} scaleY
     */
    constructor(scaleX: number, scaleY: number);
    scaleX: number;
    scaleY: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Width implements Geometry {
    /**
     * @param {number} size
     */
    constructor(size: number);
    size: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Height implements Geometry {
    /**
     * @param {number} size
     */
    constructor(size: number);
    size: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Maximum implements Geometry {
    /**
     * @param {number} sizeX
     * @param {number} sizeY
     */
    constructor(sizeX: number, sizeY: number);
    sizeX: number;
    sizeY: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Minimum implements Geometry {
    /**
     * @param {number} sizeX
     * @param {number} sizeY
     */
    constructor(sizeX: number, sizeY: number);
    sizeX: number;
    sizeY: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Emphatically implements Geometry {
    /**
     * @param {number} sizeX
     * @param {number} sizeY
     */
    constructor(sizeX: number, sizeY: number);
    sizeX: number;
    sizeY: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Shrink implements Geometry {
    /**
     * @param {number} sizeX
     * @param {number} sizeY
     */
    constructor(sizeX: number, sizeY: number);
    sizeX: number;
    sizeY: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Enlarge implements Geometry {
    /**
     * @param {number} sizeX
     * @param {number} sizeY
     */
    constructor(sizeX: number, sizeY: number);
    sizeX: number;
    sizeY: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Area implements Geometry {
    /**
     * @param {number} value
     */
    constructor(value: number);
    value: number;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Ratio implements Geometry {
    /**
     * @param {number} sizeX
     * @param {number} sizeY
     */
    constructor(sizeX: number, sizeY: number);
    sizeX: number;
    sizeY: number;
    build(): string;
}
export class Offset {
    /**
     * @param {number} offsetX
     * @param {number} offsetY
     */
    constructor(offsetX?: number, offsetY?: number);
    offsetX: number;
    offsetY: number;
    build(): string;
    inspect(): string;
}
export class Offsetted {
    /**
     * @param {Geometry} size
     * @param {Offset} offset
     */
    constructor(size: Geometry, offset: Offset);
    size: Geometry;
    offset: Offset;
    build(): string;
    inspect(): string;
}
