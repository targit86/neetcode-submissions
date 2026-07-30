/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const res = new Array<number>();
        if (!root) {
            return res;
        }
        const queue = new Queue();
        queue.enqueue(root);
        while (!queue.isEmpty()) {
            const levelSize = queue.size();
            for (let i = 0; i < levelSize; i++) {
                const node = queue.dequeue();
                if (i === levelSize - 1) {
                    res.push(node.val);
                }
                if (node.left) {
                    queue.enqueue(node.left)
                };
                if (node.right) {
                    queue.enqueue(node.right);
                }
            }
        }
        return res;
    }
}
