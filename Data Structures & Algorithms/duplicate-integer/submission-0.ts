class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const existenceMap = new Map<number, boolean>();
        let dupe = false;
        nums.forEach((num) => {
            if (existenceMap.get(num) === true) {
                dupe = true;
                return;
            }
            existenceMap.set(num, true);
        });
        return dupe;
    }
}
