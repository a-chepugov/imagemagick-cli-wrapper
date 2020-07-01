import Item from "../Item";
import SequenceOperator from "./_SequenceOperator";

export class Clone implements SequenceOperator {
	private readonly index: number | undefined;
	private readonly items: Item[];

	constructor(index: number, items: Item[]) {
		this.index = index;
		this.items = items;
	}

	build(): string[] {
		const parameters = [
			'(',
			`${this.index === undefined ? '+' : '-'}clone`,
		];

		if (this.index) {
			parameters.push(`${this.index}`);
		}

		return parameters.concat(...this.items.map((item) => item.build()), ')');
	}

	inspect(): string {
		const parameters = [
			'( ',
			`${this.index === undefined ? '+' : '-'}clone`,
		];

		if (this.index) {
			parameters.push(`${this.index}`);
		}

		parameters.push(': ');

		parameters.push(...this.items.map((i:any) => i.inspect()).join(' | '));
		parameters.push(' )');

		return parameters.join('');
	}
}

export default Clone;
