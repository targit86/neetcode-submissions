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
    inorderTraversal(root: TreeNode | null): number[] {
        const out: number[] = [];
        if (root === null) {
            return out;
        }
        out.push(...this.inorderTraversal(root.left));
        out.push(root.val);
        out.push(...this.inorderTraversal(root.right));
        return out;
    }
}
