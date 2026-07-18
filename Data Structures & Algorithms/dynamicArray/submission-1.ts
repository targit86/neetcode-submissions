class DynamicArray {

    private _arr: number[];
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this._arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this._arr.at(i)!;
        // OR return this._arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this._arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        const i = this._arr.findIndex(val => val === undefined);
        if (i === -1) {
            const currentSize = this.getCapacity();
            this.resize();
            this.set(currentSize, n);
        } else {
            this.set(i, n);
        }
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const lastSetIndex = this.getSize() - 1;
        const value = this._arr.at(lastSetIndex);
        this.set(lastSetIndex, undefined);
        return value!;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this._arr.length = this._arr.length * 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        const arr = this._arr.filter(n => n !== undefined);
        return arr.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this._arr.length;
    }
}
