class QueueNode {
    prev: QueueNode | null;
    next: QueueNode | null;
    val: number;
    constructor(val: number = 0, prev: QueueNode | null = null, next: QueueNode | null = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyDeque {
    head: QueueNode | null;
    tail: QueueNode | null;
    size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newTail = new QueueNode(value);
        this.size++;
        if (this.head === null) {
            this.head = newTail;
            this.tail = newTail;
            return;
        }
        newTail.prev = this.tail;
        this.tail!.next = newTail;
        this.tail = newTail;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newHead = new QueueNode(value);
        this.size++;
        if (this.head === null) {
            this.head = newHead;
            this.tail = newHead;
            return;
        }
        newHead.next = this.head;
        this.head.prev = newHead;
        this.head = newHead;
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.size === 0) {
            return -1;
        }
        const tailVal = this.tail!.val;
        this.tail = this.tail!.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
            this.head = this.tail;
        }
        this.size--;
        return tailVal;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.size === 0 || !this.head) {
            return -1;
        }
        const headVal = this.head.val;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return headVal;
    }
}
