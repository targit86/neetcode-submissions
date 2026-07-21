class MinStack {
    private _stack: number[];
    constructor() {
        this._stack = new Array<number>();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this._stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this._stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this._stack[this._stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = this._stack[0];
        for (let i = 1; i < this._stack.length; i++) {
            if (this._stack[i] < min) {
                min = this._stack[i];
            }
        }
        return min;
    }
}
