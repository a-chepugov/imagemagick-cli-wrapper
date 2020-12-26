export default Antialias;
/**
 * @implements {Setting}
 */
export class Antialias implements Setting {
    constructor(disable?: boolean);
    disable: boolean;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
