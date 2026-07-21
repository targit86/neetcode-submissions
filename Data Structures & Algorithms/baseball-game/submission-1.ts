class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let points = [];
        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];
            const len = points.length;
            switch (true) {
                case /\d/.test(op):
                    points.push(Number.parseInt(op));
                    break;
                case op === '+':
                    points.push(points[len-1] + points[len-2]);
                    break;
                case op === 'D':
                    points.push(points[len-1] * 2);
                    break;
                case op === 'C':
                    points.pop();
                    break;
                default:
                    console.warn(`unknown operation: "${op}"`);
            }
            // if (/\d/.test(op)) {
            //     points.push(Number.parseInt(op));
            // } else if (op === '+') {
            //     points.push(points[len-1] + points[len-2]);
            // } else if (op === 'D') {
            //     points.push(points[len-1] * 2);
            // } else if (op === 'C') {
            //     points.pop();
            // }
        }
        if (points.length === 0) {
            return 0;
        }
        return points.reduce((acc, curr) => acc += curr);
    }
}
