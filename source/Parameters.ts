import Item from './Item';

export class Parameters {
	private readonly parameters: Item[];

	constructor(parameters: Item[]) {
		this.parameters = parameters;
	}

	build(): string[] {
		return this.parameters.reduce((result: string[], item: Item) => result.concat(item.build()), []);
	}

	inspect() {
		return this.parameters.reduce((result: string[], item: Item) => result.concat(item.inspect()), []);
	}
}

export default Parameters;
