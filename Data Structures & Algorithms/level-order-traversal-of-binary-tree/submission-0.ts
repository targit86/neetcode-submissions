/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
//    constructor(val = 0, left = null, right = null) {
//        this.val = val;
//        this.left = left;
//        this.right = right;
//    }
// }

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return [];
        }
        const q: TreeNode[] = [root];
        let res = new Array<number[]>();
        while (q.length !== 0) {
            const levelSize = q.length;
            const currentLevel: number[] = [];
            for (let i = 0; i < levelSize; i++) {
                const curr = q.shift()!;
                currentLevel.push(curr.val);
                if (curr.left !== null) {
                    q.push(curr.left);
                }
                if (curr.right !== null) {
                    q.push(curr.right);
                }
            }
            res.push(currentLevel);
        }
        return res;
    }
}
