class DynamicArray {
    private _arr: number[];
    private _capacity: number;
    private _size: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this._arr = new Array<number>(capacity);
        this._capacity = capacity;
        this._size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this._arr[i];
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
        if (this._size === this._capacity) {
            this.resize();
        }
        this._arr[this._size] = n;
        this._size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const val = this._arr[this._size - 1];
        this._size--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this._capacity *= 2;
        const newArray = new Array<number>(this._capacity);
        for (let i = 0; i < this._size; i++) {
            newArray[i] = this._arr[i];
        }
        this._arr = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this._size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this._capacity;
    }
}