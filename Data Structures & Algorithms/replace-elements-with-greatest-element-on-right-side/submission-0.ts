class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            let maxRight = -1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > maxRight) {
                    maxRight = arr[j];
                }
            }
            arr[i] = maxRight;
        }
        arr[arr.length - 1] = -1;
        return arr;
    }
}
