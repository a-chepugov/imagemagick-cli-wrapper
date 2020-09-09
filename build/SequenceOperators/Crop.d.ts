import SequenceOperator from "./_SequenceOperator";
import { Geometry } from "../Geometry";
export declare class Crop implements SequenceOperator {
    private readonly geometry;
    private readonly tiles;
    private readonly emphatically;
    constructor(geometry: Geometry, tiles?: boolean, emphatically?: boolean);
    build(): string[];
    inspect(): string;
}
export default Crop;
