/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            else stack.pop()
        }

        if (s[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            else stack.pop();
        }

        if (s[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            else stack.pop();
        }
    }

    if (stack.length === 0) return true;
    else return false;
};
