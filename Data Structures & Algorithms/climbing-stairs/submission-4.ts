class Solution {
    /**
     * Maths (🤷)
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const sqrt5 = Math.sqrt(5);
        const phi = (1 + sqrt5) / 2;
        const psi = (1 - sqrt5) / 2;
        n++;
        return Math.round(
            (Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5
        )
    }
    // /**
    //  * Matrix Exponentiation (🤯)
    //  * @param {number} n
    //  * @return {number}
    //  */
    // climbStairs(n: number): number {
    //     if (n === 1) {
    //         return 1;
    //     }

    //     const matrixMulti = (A: number[][], B: number[][]) => {
    //         return [
    //             [
    //                 A[0][0] * B[0][0] + A[0][1] * B[1][0],
    //                 A[0][0] * B[0][1] + A[0][1] * B[1][1]
    //             ],
    //             [
    //                 A[1][0] * B[0][0] + A[1][1] * B[1][0],
    //                 A[1][0] * B[0][1] + A[1][1] * B[1][1]
    //             ],
    //         ];
    //     };

    //     const matrixPow = (M, p) => {
    //         let result = [
    //             [1, 0],
    //             [0, 1],
    //         ];
    //         let base = M;

    //         while (p > 0) {
    //             if (p % 2 === 1) {
    //                 result = matrixMulti(result, base);
    //             }
    //             base = matrixMulti(base, base);
    //             p = Math.floor(p / 2);
    //         }

    //         return result;
    //     }

    //     const M = [
    //         [1, 1],
    //         [1, 0],
    //     ]
    //     const result = matrixPow(M, n);
    //     return result [0][0];
    // }

    // /**
    //  * Dynamic Programming approach (Space Optimized)
    //  * @param {number} n
    //  * @return {number}
    //  */
    // climbStairs(n: number): number {
    //     let one = 1;
    //     let two = 1;
    //     for (let i = 0; i < n - 1; i++) {
    //         const t = one;
    //         one = one + two;
    //         two = t;
    //     }
    //     return one;
    // }
    // /**
    //  * Dynamic Programming approach (Bottom-Up)
    //  * @param {number} n
    //  * @return {number}
    //  */
    // climbStairs(n: number): number {
    //     if (n <= 2) {
    //         return n;
    //     }
    //     const dp = new Int32Array(n + 1).fill(0);
    //     dp[1] = 1;
    //     dp[2] = 2;
    //     for (let i = 3; i < n + 1; i++) {
    //         dp[i] = dp[i - 1] + dp[i - 2];
    //     }
    //     return dp[n];
    // }
    // /**
    //  * Dynamic Programming approach (Top-Down)
    //  * @param {number} n
    //  * @return {number}
    //  */
    // climbStairs(n: number): number {
    //     const cache = new Int32Array(n + 1).fill(-1);
    //     const dfs = (i: number) => {
    //         if (i >= n) {
    //             return i === n ? 1 : 0;
    //         }
    //         if (cache[i] !== -1) {
    //             return cache[i];
    //         }
    //         cache[i] = dfs(i + 1) + dfs(i + 2)
    //         return cache[i];
    //     };
    //     return dfs(0);
    // }
}
