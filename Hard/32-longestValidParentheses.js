/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];
    var result = 0;
    var maxLength = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        if (s[i] === ')') {
            if (stack.length > 0) {
                if (s[stack[stack.length - 1]] === '(') {
                    stack.pop();
                } else {
                    stack.push(i);
                }
            } else if (stack.length === 0) {
                stack.push(i);
            }
        }
    }

    if (stack.length === 0) return s.length;

    var right = s.length;
    while (stack.length > 0) {
        var left = stack[stack.length - 1];
        maxLength = right - left - 1;
        result = Math.max(maxLength, result);
        right = stack.pop();
    }
    if (stack.length === 0) {
        result = Math.max(result, right);
    }

    return result;
};
