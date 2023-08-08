export default Region;
/**
 * @implements {Setting}
 */
export class Region implements Setting {
    /**
     * @param {Geometry} [geometry]
     */
    constructor(geometry?: Geometry);
    geometry: Geometry;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
import Geometry_1 = require("../../Geometry");
import Geometry = Geometry_1.Geometry;
