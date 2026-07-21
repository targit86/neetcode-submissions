class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const bracketStack = [];
        const bracketMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        for (let i = 0; i < s.length; i++) {
            const matchingBracket = bracketMap[s[i]];
            const stackSize = bracketStack.length;
            if (matchingBracket) {
                if (
                    stackSize > 0 &&
                    bracketStack[stackSize - 1] === matchingBracket
                ) {
                    bracketStack.pop();
                } else {
                    return false;
                }
            } else {
                bracketStack.push(s[i]);
            }
        }
        return bracketStack.length === 0;
    }
}
