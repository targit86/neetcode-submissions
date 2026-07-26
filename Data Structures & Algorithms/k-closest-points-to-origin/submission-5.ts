// interface IPointDistance {
//     point: number[]
//     distance: number
// }

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // even simpler
        points.sort((a, b) =>
            (Math.pow(a[0], 2) + Math.pow(a[1], 2)) - 
            (Math.pow(b[0], 2) + Math.pow(b[1], 2))
        );
        return points.slice(0, k);
        // // skip the work
        // if (k === points.length) {
        //     return points;
        // }
        // const distances: IPointDistance[] = []
        // for (let i = 0; i < points.length; i++) {
        //     const point = points[i];
        //     distances.push({
        //         point,
        //         distance: Math.sqrt(
        //             Math.pow(point[0], 2) + Math.pow(point[1], 2)
        //         ),
        //     });
        // }
        // return distances
        //     .sort((a, b) => a.distance - b.distance)
        //     .slice(0, k)
        //     .map((el) => el.point);
    }
}
