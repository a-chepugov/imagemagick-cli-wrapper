export default Fx;
/**
 * @description fx expression builder
 */
export class Fx {
    /**
     * @param {string} expression
     */
    constructor(expression: string);
    /** @private */
    private expression;
    toString(): string;
}
