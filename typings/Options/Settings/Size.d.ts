export default Size;
/**
 * @implements {Setting}
 */
export class Size implements Setting {
    /**
     * @param {number} width
     * @param {number} height
     * @param {number} offset
     */
    constructor(width: number, height: number, offset: number);
    width: number;
    height: number;
    offset: number;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
