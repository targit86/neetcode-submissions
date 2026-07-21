class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        // const newArray = [...nums];
        const newArray = new Array(nums.length * 2);
        const l = nums.length;
        for (let i = 0; i < nums.length; i++) {
            newArray[i] = nums[i];
            newArray[l+i] = nums[i];
        }
        return newArray;
        // works, but feels like cheating...
        // return [
        //     ...nums,
        //     ...nums
        // ];
    }
}
