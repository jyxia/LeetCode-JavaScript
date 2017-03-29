/**
 * !!can always use Math.trunc() to get the integer part of a number
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [],
        i, num = 0, sign = '+';

    for (i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== ' ') {
            num = num * 10 + parseInt(s[i], 10);
        }
        if ((isNaN(s[i])) || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(parseInt(stack.pop(), 10) * num);
            } else if (sign === '/') {
                stack.push(Math.trunc(parseInt(stack.pop(), 10) / num));
            }
            sign = s[i];
            num = 0;
        }
    }

    for (i = 0; i < stack.length; i++) {
       num += stack[i];
    }

    return num;
};
