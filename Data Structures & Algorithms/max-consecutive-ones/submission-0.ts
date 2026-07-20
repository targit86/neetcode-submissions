class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let num1s = 0;
        let max1s = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                num1s++;
            } else {
                num1s = 0;
            }
            if (num1s > max1s) {
                max1s = num1s;
            }
        }
        return max1s;
    }
}
