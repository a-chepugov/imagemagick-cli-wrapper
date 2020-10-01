import Operator from "./_Operator";
import Geometry from "../Geometry";
export declare class Repage implements Operator {
    private readonly geometry;
    constructor(geometry?: Geometry);
    build(): string[];
    inspect(): string;
}
export default Repage;
