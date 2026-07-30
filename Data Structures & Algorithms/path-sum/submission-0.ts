/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number, currentSum = 0): boolean {
        if (root === null) {
            return false;
        }

        const newSum = currentSum + root.val;

        if (root.left === null && root.right === null) {
            return newSum === targetSum;
        }

        return (
            this.hasPathSum(root.left, targetSum, newSum) || this.hasPathSum(root.right, targetSum, newSum)
        );
    }
}
