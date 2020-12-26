export default Font;
/**
 * @implements {Setting}
 */
export class Font implements Setting {
    /**
     * @param {string} name
     */
    constructor(name: string);
    name: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
