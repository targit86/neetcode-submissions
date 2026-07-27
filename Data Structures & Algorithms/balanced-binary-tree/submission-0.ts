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
    getHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        return 1 + Math.max(
            this.getHeight(node.left),
            this.getHeight(node.right),
        );
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (root === null) {
            return true;
        }
        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }
        
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
