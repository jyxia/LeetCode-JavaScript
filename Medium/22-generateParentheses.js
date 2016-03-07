/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var results = [];
    var str = '';
    generatorHelper(results, str, n, n);
    return results;
};

var generatorHelper = function(results, str, left, right) {
    if (left === 0 && right === 0) {
        results.push(str);
        return;
    }

    if (left > 0) generatorHelper(results, str + '(', left - 1, right);
    if (right > left) generatorHelper(results, str + ')', left, right - 1);
};
