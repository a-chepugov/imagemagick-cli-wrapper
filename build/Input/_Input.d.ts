/// <reference types="node" />
import WritableStream = NodeJS.WritableStream;
import Item from '../Item';
export interface Input extends Item {
    pipeTo(output: WritableStream): any;
}
export default Input;
