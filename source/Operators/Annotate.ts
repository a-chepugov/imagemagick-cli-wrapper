import Operator from "./_Operator";

export interface Annotate extends Operator {
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
		return this.build().join(' ');
	}
}

export class DegreesXY implements Annotate {
	private readonly Xdegrees: number;
	private readonly Ydegrees: number;
	private readonly text: string;

	constructor(Xdegrees: number, Ydegrees: number, text: string) {
		this.Xdegrees = Number.isFinite(Xdegrees) ? Xdegrees: 0;
		this.Ydegrees = Number.isFinite(Ydegrees) ? Ydegrees: 0;
		this.text = text;
	}

	build(): string[] {
		return [
			'-annotate',
			`${this.Xdegrees}x${this.Ydegrees}`,
			`${this.text}`
		];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export class DegreesXYTxTy implements Annotate {
	private readonly Xdegrees: number;
	private readonly Ydegrees: number;
	private readonly transformX: number;
	private readonly transformY: number;
	private readonly text: string;

	constructor(Xdegrees: number, Ydegrees: number, transformX: number, transformY: number, text: string) {
		this.Xdegrees = Number.isFinite(Xdegrees) ? Xdegrees: 0;
		this.Ydegrees = Number.isFinite(Ydegrees) ? Ydegrees: 0;
		this.transformX = Number.isFinite(transformX) ? transformX: 0;
		this.transformY = Number.isFinite(transformY) ? transformY: 0;
		this.text = text;
	}

	build(): string[] {
		return [
			'-annotate',
			`${this.Xdegrees}x${this.Ydegrees}` +
			(this.transformX < 0 ? `${this.transformX}` : `+${this.transformX}`) +
			(this.transformY < 0 ? `${this.transformY}` : `+${this.transformY}`),
			this.text
		];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export class TxTy implements Annotate {
	private readonly transformX: number;
	private readonly transformY: number;
	private readonly text: string;

	constructor(transformX: number, transformY: number, text: string) {
		this.transformX = Number.isFinite(transformX) ? transformX: 0;
		this.transformY = Number.isFinite(transformY) ? transformY: 0;
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
		return this.build().join(' ');
	}
}
