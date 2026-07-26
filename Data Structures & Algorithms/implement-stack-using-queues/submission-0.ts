class MyStack {
    q: number[];
    constructor() {
        this.q = new Array<number>();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.q.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        if (this.empty()) {
            return -1;
        }
        return this.q.at(this.q.length - 1);
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
