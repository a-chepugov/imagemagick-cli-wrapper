/// <reference types="node" />
import ReadableStream = NodeJS.ReadableStream;
import Item from '../Item';
export interface Output extends Item {
    pipeFrom(input: ReadableStream): any;
}
export default Output;
