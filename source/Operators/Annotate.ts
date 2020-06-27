import Operator from "./Operator";

export interface Annotate extends Operator{
}

export default Annotate;

export class Degrees implements Annotate {
	private readonly degrees: number;
	private readonly text: string;

	constructor(degrees: number, text: string) {
		this.degrees = degrees;
		this.text = text;
	}

	build(): string[] {
		return [
			'-annotate',
			`${this.degrees}`,
			this.text
		];
	}

	inspect(): string {
		return this.build().slice(0, 1).join(' ');
	}
}

export class DegreesXY implements Annotate {
	private readonly degreesX: number;
	private readonly degreesY: number;
	private readonly text: string;

	constructor(degreesX: number, degreesY: number, text: string) {
		this.degreesX = degreesX;
		this.degreesY = degreesY;
		this.text = text;
	}

	build(): string[] {
		return [
			'-annotate',
			`${this.degreesX}x${this.degreesY}`,
			`${this.text}`
		];
	}

	inspect(): string {
		return this.build().slice(0, 2).join(' ');
	}
}

export class DegreesXYTxTy implements Annotate {
	private readonly degreesX: number;
	private readonly degreesY: number;
	private readonly transformX: number;
	private readonly transformY: number;
	private readonly text: string;

	constructor(degreesX: number, degreesY: number, transformX: number, transformY: number, text: string) {
		this.degreesX = degreesX;
		this.degreesY = degreesY;
		this.transformX = transformX;
		this.transformY = transformY;
		this.text = text;
	}

	build(): string[] {
		return [
			'-annotate',
			`${this.degreesX}x${this.degreesY}`,
			(this.transformX < 0 ? `${this.transformX}` : `+${this.transformX}`) +
			(this.transformY < 0 ? `${this.transformY}` : `+${this.transformY}`),
			this.text
		];
	}

	inspect(): string {
		return this.build().slice(0, 3).join(' ');
	}
}

export class TxTy implements Annotate {
	private readonly transformX: number;
	private readonly transformY: number;
	private readonly text: string;

	constructor(transformX: number, transformY: number, text: string) {
		this.transformX = transformX;
		this.transformY = transformY;
		this.text = text;
	}

	build(): string[] {
		return [
			'-annotate',
			(this.transformX < 0 ? `${this.transformX}` : `+${this.transformX}`) +
			(this.transformY < 0 ? `${this.transformY}` : `+${this.transformY}`),
			this.text
		];
	}

	inspect(): string {
		return this.build().slice(0, 2).join(' ');
	}
}
