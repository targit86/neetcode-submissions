class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private _head: ListNode | null;
    private _tail: ListNode | null;
    private _size: number;

    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let node = this._head;
        for (let i = 0; i < index; i++) {
            if (!node) {
                return -1;
            }
            node = node.next;
        }
        if (!node) {
            return -1;
        }
        return node.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new ListNode(val);
        newNode.next = this._head;
        this._head = newNode;
        if (this._tail === null) {
            this._tail = newNode;
        }
        this._size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new ListNode(val);
        if (this._head === null) {
            this._head = newNode;
        }
        if (this._tail === null) {
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this._size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (this._head === null) {
            return false;
        }

        if (index === 0) {
            this._head = this._head.next;
            if (this._head === null) {
                this._tail = null; // list is now empty
            }
            this._size--;
            return true;
        }

        // Find the node *before* the one we want to delete.
        let prev = this._head;
        for (let i = 0; i < index - 1; i++) {
            if (prev.next === null) {
                return false;
            }
            prev = prev.next;
        }

        const toRemove = prev.next;
        if (toRemove === null) {
            return false;
        }

        prev.next = toRemove.next;
        if (prev.next === null) {
            this._tail = prev;
        }

        this._size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values: number[] = [];
        let node = this._head;
        while (node !== null) {
            values.push(node.value);
            node = node.next;
        }
        return values;
    }

    toString() {
        let node = this._head;
        if (node === null) {
            return 'null';
        }
        let strs: string[] = [];
        while (node !== null) {
            strs.push(`${node.value} -> ${node.next?.value ?? 'null'}`);
            node = node.next;
        }
        return strs.join(', ');
    }
}

export default LinkedList;
