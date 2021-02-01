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
     * @param {number|Fx} scale
     */
    constructor(scale: number | Fx);
    scale: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class ScaleXY implements Geometry {
    /**
     * @param {number|Fx} scaleX
     * @param {number|Fx} scaleY
     */
    constructor(scaleX: number | Fx, scaleY: number | Fx);
    scaleX: number | Fx;
    scaleY: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Width implements Geometry {
    /**
     * @param {number|Fx} size
     */
    constructor(size: number | Fx);
    size: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Height implements Geometry {
    /**
     * @param {number|Fx} size
     */
    constructor(size: number | Fx);
    size: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Maximum implements Geometry {
    /**
     * @param {number|Fx} sizeX
     * @param {number|Fx} sizeY
     */
    constructor(sizeX: number | Fx, sizeY: number | Fx);
    sizeX: number | Fx;
    sizeY: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Minimum implements Geometry {
    /**
     * @param {number|Fx} sizeX
     * @param {number|Fx} sizeY
     */
    constructor(sizeX: number | Fx, sizeY: number | Fx);
    sizeX: number | Fx;
    sizeY: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Emphatically implements Geometry {
    /**
     * @param {number|Fx} sizeX
     * @param {number|Fx} sizeY
     */
    constructor(sizeX: number | Fx, sizeY: number | Fx);
    sizeX: number | Fx;
    sizeY: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Shrink implements Geometry {
    /**
     * @param {number|Fx} sizeX
     * @param {number|Fx} sizeY
     */
    constructor(sizeX: number | Fx, sizeY: number | Fx);
    sizeX: number | Fx;
    sizeY: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Enlarge implements Geometry {
    /**
     * @param {number|Fx} sizeX
     * @param {number|Fx} sizeY
     */
    constructor(sizeX: number | Fx, sizeY: number | Fx);
    sizeX: number | Fx;
    sizeY: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Area implements Geometry {
    /**
     * @param {number|Fx} value
     */
    constructor(value: number | Fx);
    value: number | Fx;
    build(): string;
}
/**
 * @implements {Geometry}
 */
export class Ratio implements Geometry {
    /**
     * @param {number|Fx} sizeX
     * @param {number|Fx} sizeY
     */
    constructor(sizeX: number | Fx, sizeY: number | Fx);
    sizeX: number | Fx;
    sizeY: number | Fx;
    build(): string;
}
export class Offset {
    /**
     * @param {number|Fx} offsetX
     * @param {number|Fx} offsetY
     */
    constructor(offsetX?: number | Fx, offsetY?: number | Fx);
    offsetX: number | Fx;
    offsetY: number | Fx;
    build(): string;
    inspect(): string;
}
/**
 * @implements {Geometry}
 */
export class Offsetted implements Geometry {
    /**
     * @param {Geometry} size
     * @param {Offset} offset
     */
    constructor(size?: Geometry, offset?: Offset);
    size: Geometry;
    offset: Offset;
    build(): string;
    inspect(): string;
}
import Fx_1 = require("./Expressions/Fx");
import Fx = Fx_1.Fx;
