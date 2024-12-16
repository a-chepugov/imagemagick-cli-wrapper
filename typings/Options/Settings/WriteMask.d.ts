export default WriteMask;
/**
 * @implements {Setting}
 */
export class WriteMask implements Setting {
    /**
     * @param {string} [filename]
     */
    constructor(filename?: string);
    filename: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
