import ChannelOperator from "./ChannelOperator";

export class Separate implements ChannelOperator {
	build(): string[] {
		return ['-separate'];
	}

	inspect(): string {
		return this.build().join(' ');
	}
}

export default Separate;
