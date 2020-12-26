export default Interlace;
export type Type = string;
export namespace Type {
    const none: string;
    const line: string;
    const plane: string;
    const partition: string;
    const JPEG: string;
    const GIF: string;
    const PNG: string;
}
/**
 * @implements {Setting}
 */
export class Interlace implements Setting {
    /**
     * @param {Type} type
     */
    constructor(type: Type);
    type: string;
    build(): string[];
    inspect(): string;
}
import Setting_1 = require("./_Setting");
import Setting = Setting_1.Setting;
