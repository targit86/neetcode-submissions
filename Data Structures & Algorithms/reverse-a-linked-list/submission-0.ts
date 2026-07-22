/**
 * Definition for singly-linked list.
 */
// class ListNode {
//     val: number;
//     next: ListNode;
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let curr = head;
        while (curr !== null) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
}
