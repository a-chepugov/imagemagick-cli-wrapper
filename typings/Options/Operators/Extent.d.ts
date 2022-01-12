export default Extent;
/**
 * @implements {Operator}
 */
export class Extent implements Operator {
    /**
     * @param {Geometry} geometry
     */
    constructor(geometry: Geometry);
    geometry: Geometry;
    build(): string[];
    inspect(): string;
}
import Operator_1 = require("./_Operator");
import Operator = Operator_1.Operator;
import Geometry_1 = require("../../Geometry");
import Geometry = Geometry_1.Geometry;
