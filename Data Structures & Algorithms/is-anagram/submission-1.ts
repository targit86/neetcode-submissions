class Solution {

    stringCharMap(s: string): Map<string, number> {
        const sMap = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            const charCount = sMap.get(s[i]) ?? 0;
            sMap.set(s[i], charCount + 1);
        }

        return sMap;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const sMap = this.stringCharMap(s);
        const tMap = this.stringCharMap(t);
        for (let i = 0; i < s.length; i++) {
            if (sMap.get(s[i]) !== tMap.get(s[i])) {
                return false;
            }
        }


        return true;
    }
}
