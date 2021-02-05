export default Background;
/**
 * @implements {Setting}
 */
export class Background implements Setting {
    /**
     * @param {string} color
     */
    constructor(color?: string);
    color: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
