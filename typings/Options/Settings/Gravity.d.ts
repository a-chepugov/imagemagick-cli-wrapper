export default Gravity;
export type Type = string;
export namespace Type {
    const None: string;
    const Center: string;
    const East: string;
    const Forget: string;
    const NorthEast: string;
    const North: string;
    const NorthWest: string;
    const SouthEast: string;
    const South: string;
    const SouthWest: string;
    const West: string;
}
/**
 * @implements {Setting}
 */
export class Gravity implements Setting {
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
