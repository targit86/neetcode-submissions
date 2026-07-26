class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        piles.sort((a, b) => a - b);
        let minBph = 1;
        let maxBph = piles[piles.length - 1];
        let bph = maxBph;
        while (minBph <= maxBph) {
            const currBph = Math.floor((minBph + maxBph) / 2);
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / currBph);
            }
            if (hours <= h) {
                bph = Math.min(bph, currBph);
                maxBph = currBph - 1;
            } else {
                minBph = currBph + 1;
            }
        }
        return bph;
    }
}
