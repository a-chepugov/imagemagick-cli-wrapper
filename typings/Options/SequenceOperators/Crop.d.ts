export default Crop;
/**
 * @implements {SequenceOperator}
 */
export class Crop implements SequenceOperator {
    /**
     * @param {Geometry} geometry
     * @param {boolean} tiles
     * @param {boolean} emphatically
     */
    constructor(geometry: Geometry, tiles?: boolean, emphatically?: boolean);
    geometry: Geometry;
    tiles: boolean;
    emphatically: boolean;
    build(): string[];
    inspect(): string;
}
import SequenceOperator_1 = require("./_SequenceOperator");
import SequenceOperator = SequenceOperator_1.SequenceOperator;
import Geometry_1 = require("../../Geometry");
import Geometry = Geometry_1.Geometry;
