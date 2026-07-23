class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null, prev: ListNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number = 0;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size || this.head === null) {
            return -1;
        }
        let currNode: ListNode = this.head;
        let i = 0;
        while (i < index) {
            currNode = currNode.next!;
            i++;
        }

        return currNode?.val ?? -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const newHead = new ListNode(val, this.head, null);
        if (this.head) {
            this.head.prev = newHead;
        }
        if (this.size === 0) {
            this.tail = newHead;
        }
        this.head = newHead;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newTail = new ListNode(val, null, this.tail);
        if (this.tail) {
            this.tail.next = newTail;
        }
        if (this.size === 0) {
            this.head = newTail;
        }
        this.tail = newTail;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        if (index > this.size || index < 0) {
            return;
        }
        let currNode: ListNode = this.head!;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next!;
        }
        let newNode = new ListNode(val, currNode, currNode.prev);
        currNode.prev!.next = newNode;
        currNode.prev = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
        if (index < 0 || index >= this.size) return;
        
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head!.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.size - 1) {
            this.tail = this.tail!.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
        } else {
            let currNode: ListNode = this.head!;
            for (let i = 0; i < index; i++) {
                currNode = currNode.next!;
            }
            currNode.prev!.next = currNode.next;
            currNode.next!.prev = currNode.prev;
        }
        this.size--;
    }
}
