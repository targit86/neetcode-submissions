class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const braces = [];
        let valid: boolean;
        if (s.length < 2) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            const curr = s[i];
            switch (curr) {
                case '[':
                case '{':
                case '(':
                    braces.push(curr);
                    valid = false;
                    break;
                case ')':
                    if (braces.pop() !== '(') {
                        valid = false;
                        return false;
                    } else {
                        valid = true;
                    }
                    break;
                case '}':
                    if (braces.pop() !== '{') {
                        valid = false;
                        return false;
                    } else {
                        valid = true;
                    }
                    break;
                case ']':
                    if (braces.pop() !== '[') {
                        valid = false;
                        return false;
                    } else {
                        valid = true;
                    }
                    break;
            }

        }
        return valid && braces.length === 0;
    }
}
