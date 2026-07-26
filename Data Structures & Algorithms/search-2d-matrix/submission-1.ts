class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // find the row that is in range
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;
        let rowToSearch: number[] | null = null;
        // binary search to find the row that might contain the target
        while (top <= bottom) {
            const row = Math.floor((top + bottom) / 2);
            if (target > matrix[row][right]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bottom = row - 1;
            } else {
                rowToSearch = matrix[row];
                break;
            }
        }
        if (rowToSearch === null) {
            return false;
        }
        // search the matching row
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
