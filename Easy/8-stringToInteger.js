/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (str.length === 0) return 0;
    var index = 0;
    var sign = 1;
    var num = 0;
    // delete spaces before and after, trim() is a good method.
    str = str.trim();

    // not clear from the question, the string may not begin with a sign.
    if (str[index] === '-' ) {
        sign = -1;
        index++;
    } else if (str[index] === '+' ) {
        index++;
    }

    for (var i = index; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') break;
        num = num * 10 + parseInt(str[i]);
    }

    // ugly here, don't how to represent the max number in JavaScript.
    var MAXVAULE = Math.pow(2, 31) - 1;
    if (sign === 1 && num >= MAXVAULE) {
        return MAXVAULE;
    }
    if (sign === -1 && -num <= -(MAXVAULE+1)) {
        return -(MAXVAULE+1);
    }

    return num * sign;
};
