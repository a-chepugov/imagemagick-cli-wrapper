import Item from './Item';

export class Parameters {
	private readonly parameters: Item[];

	constructor() {
		this.parameters = [];
	}

	push(item: Item) {
		this.parameters.push(item);
		return this;
	}

	unshift(item: Item) {
		this.parameters.unshift(item);
		return this;
	}

	append(items: Item[]) {
		this.parameters.concat(items);
		return this;
	}

	prepend(items: Item[]) {
		this.parameters.splice(0, 0, ...items);
		return this;
	}

	static of(items: Item[]) {
		const parameters = new Parameters();
		return parameters.append(items);
	}

	build(): string[] {
		return this.parameters.reduce((result: string[], item: Item) => result.concat(item.build()), []);
	}

	inspect() {
		return this.parameters.reduce((result: string[], item: Item) => result.concat(item.inspect()), []);
	}
}

export default Parameters;
