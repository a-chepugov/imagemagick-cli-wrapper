export interface Geometry {
	build(): string;
}

export default Geometry

export class Scale implements Geometry {
	private readonly scale: number;

	constructor(scale: number) {
		this.scale = scale;
	}

	build() {
		return `${this.scale}%`;
	}
}

export class ScaleXY implements Geometry {
	private readonly scaleX: number;
	private readonly scaleY: number;

	constructor(scaleX: number, scaleY: number) {
		this.scaleX = scaleX;
		this.scaleY = scaleY;
	}

	build() {
		return `${this.scaleX}%x${this.scaleY}%`;
	}
}

export class Width implements Geometry {
	private readonly size: number;

	constructor(size: number) {
		this.size = size;
	}

	build() {
		return `${this.size}`;
	}
}

export class Height implements Geometry {
	private readonly size: number;

	constructor(size: number) {
		this.size = size;
	}

	build() {
		return `x${this.size}`;
	}
}

export class Maximum implements Geometry {
	private readonly sizeX: number;
	private readonly sizeY: number;

	constructor(sizeX: number, sizeY: number) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}`;
	}
}

export class Minimum implements Geometry {
	private readonly sizeX: number;
	private readonly sizeY: number;

	constructor(sizeX: number, sizeY: number) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}^`;
	}
}

export class Emphatically implements Geometry {
	private readonly sizeX: number;
	private readonly sizeY: number;

	constructor(sizeX: number, sizeY: number) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}!`;
	}
}

export class Shrink implements Geometry {
	private readonly sizeX: number;
	private readonly sizeY: number;

	constructor(sizeX: number, sizeY: number) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}>`;
	}
}

export class Enlarge implements Geometry {
	private readonly sizeX: number;
	private readonly sizeY: number;

	constructor(sizeX: number, sizeY: number) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}x${this.sizeY}<`;
	}
}

export class Area implements Geometry {
	private readonly value: number;

	constructor(value: number) {
		this.value = value;
	}

	build() {
		return `${this.value}@`;
	}
}

export class Ratio implements Geometry {
	private readonly sizeX: number;
	private readonly sizeY: number;

	constructor(sizeX: number, sizeY: number) {
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	build() {
		return `${this.sizeX}:${this.sizeY}^`;
	}
}

export class Offset {
	private readonly offsetX: number;
	private readonly offsetY: number;

	constructor(offsetX: number = 0, offsetY: number = 0) {
		this.offsetX = offsetX;
		this.offsetY = offsetY;
	}

	build() {
		return `${this.offsetX < 0 ? this.offsetX : `+${this.offsetX}`}${this.offsetY < 0 ? this.offsetY : `+${this.offsetY}`}`;
	}

	inspect(): string {
		return this.build();
	}
}

export class Offsetted implements Geometry {
	private readonly size: Geometry;
	private readonly offset: Offset;

	constructor(size: Geometry, offset: Offset) {
		this.size = size;
		this.offset = offset;
	}

	build() {
		return `${this.size.build()}${this.offset.build()}`;
	}

	inspect(): string {
		return this.build();
	}
}
