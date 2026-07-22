/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let tail = new ListNode();
        let temp = tail;
        let l1 = list1;
        let l2 = list2;
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }
        if (l1 !== null) {
            temp.next = l1;
        } else if (l2 !== null) {
            temp.next = l2;
        }
        return tail.next;
    }
}
