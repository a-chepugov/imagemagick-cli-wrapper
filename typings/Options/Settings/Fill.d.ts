export default Fill;
/**
 * @implements {Setting}
 */
export class Fill implements Setting {
    /**
     * @param {string} color
     */
    constructor(color: string);
    color: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
