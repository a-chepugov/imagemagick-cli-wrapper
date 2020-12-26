export default Fx;
export class Fx {
    /**
     * @param {string} expression
     */
    constructor(expression: string);
    /** @private */
    private expression;
    toString(): string;
}
