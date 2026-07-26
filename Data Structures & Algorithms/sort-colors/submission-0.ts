class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const counts = {0: 0, 1: 0, 2: 0};
        
        for (let c = 0; c < nums.length; c++) {
            counts[nums[c]]++;
        }
        
        let i = 0;
        for (let x = 0; x < Object.keys(counts).length; x++) {
            for (let j = 0; j < counts[x]; j++) {
                nums[i] = x;
                i++;
            }
        }
    }
}
