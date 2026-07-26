class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // find the row that is in range
        let left = 0;
        let right = matrix[0].length - 1;
        let rowToSearch: number[] | null = null;
        for (const row of matrix) {
            if (row[left] <= target && row[right] >= target) {
                rowToSearch = row;
                break;
            }
        }
        if (rowToSearch === null) {
            return false;
        }
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target > rowToSearch[mid]) {
                left = mid + 1;
            } else if (target < rowToSearch[mid]) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
