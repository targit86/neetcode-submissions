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
            if (matchingBracket) {
                if (
                    bracketStack.length > 0 &&
                    bracketStack[bracketStack.length - 1] === matchingBracket
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
        // if (s.length < 2) {
        //     return false;
        // }
        // for (let i = 0; i < s.length; i++) {
        //     const curr = s[i];
        //     switch (curr) {
        //         case "[":
        //         case "{":
        //         case "(":
        //             braces.push(curr);
        //             valid = false;
        //             break;
        //         case ")":
        //             if (braces.pop() !== "(") {
        //                 valid = false;
        //                 return false;
        //             } else {
        //                 valid = true;
        //             }
        //             break;
        //         case "}":
        //             if (braces.pop() !== "{") {
        //                 valid = false;
        //                 return false;
        //             } else {
        //                 valid = true;
        //             }
        //             break;
        //         case "]":
        //             if (braces.pop() !== "[") {
        //                 valid = false;
        //                 return false;
        //             } else {
        //                 valid = true;
        //             }
        //             break;
        //     }
        // }
        // return valid && braces.length === 0;
    }
}
