/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     key: number;
//     value: string;
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key: number, value: string) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        const arr = [...pairs];
        const results = new Array<Pair[]>();
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            let j = i - 1;
            // shift larger keys right; stop on equal → stable
            while (j >= 0 && arr[j].key > current.key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
            results.push([...arr]);
        }
        return results;
    }
}

export default Solution;