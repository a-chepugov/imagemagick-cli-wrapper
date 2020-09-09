export interface Geometry {
    build(): string;
}
export default Geometry;
export declare class Scale implements Geometry {
    private readonly scale;
    constructor(scale: number);
    build(): string;
}
export declare class ScaleXY implements Geometry {
    private readonly scaleX;
    private readonly scaleY;
    constructor(scaleX: number, scaleY: number);
    build(): string;
}
export declare class Width implements Geometry {
    private readonly size;
    constructor(size: number);
    build(): string;
}
export declare class Height implements Geometry {
    private readonly size;
    constructor(size: number);
    build(): string;
}
export declare class Maximum implements Geometry {
    private readonly sizeX;
    private readonly sizeY;
    constructor(sizeX: number, sizeY: number);
    build(): string;
}
export declare class Minimum implements Geometry {
    private readonly sizeX;
    private readonly sizeY;
    constructor(sizeX: number, sizeY: number);
    build(): string;
}
export declare class Emphatically implements Geometry {
    private readonly sizeX;
    private readonly sizeY;
    constructor(sizeX: number, sizeY: number);
    build(): string;
}
export declare class Shrink implements Geometry {
    private readonly sizeX;
    private readonly sizeY;
    constructor(sizeX: number, sizeY: number);
    build(): string;
}
export declare class Enlarge implements Geometry {
    private readonly sizeX;
    private readonly sizeY;
    constructor(sizeX: number, sizeY: number);
    build(): string;
}
export declare class Area implements Geometry {
    private readonly value;
    constructor(value: number);
    build(): string;
}
export declare class Ratio implements Geometry {
    private readonly sizeX;
    private readonly sizeY;
    constructor(sizeX: number, sizeY: number);
    build(): string;
}
export declare class Offset {
    private readonly offsetX;
    private readonly offsetY;
    constructor(offsetX?: number, offsetY?: number);
    build(): string;
    inspect(): string;
}
export declare class Offsetted implements Geometry {
    private readonly size;
    private readonly offset;
    constructor(size: Geometry, offset: Offset);
    build(): string;
    inspect(): string;
}
