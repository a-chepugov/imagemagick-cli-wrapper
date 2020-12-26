export default Format;
/**
 * @implements {Setting}
 */
export class Format implements Setting {
    /**
     * @param {string} string
     */
    constructor(string: string);
    string: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
