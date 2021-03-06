export default Quality;
/**
 * @implements {Setting}
 */
export class Quality implements Setting {
    /**
     * @param {number} value
     */
    constructor(value: number);
    value: number;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
