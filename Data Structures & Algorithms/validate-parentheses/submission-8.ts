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
        for (let c of s) {
            const matchingBracket = bracketMap[c];
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
                bracketStack.push(c);
            }
        }
        return bracketStack.length === 0;
    }
}
