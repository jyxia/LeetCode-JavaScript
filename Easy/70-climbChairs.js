/**
 * @param {number} n
 * @return {number}
 */
// interative
var climbStairs = function(n) {
    var result = 0;
    var stepOne = 1;
    var stepTwo = 2;
    if (n === 1) return stepOne;
    if (n === 2) return stepTwo;

    for (var i = 3; i <= n; i++) {
        result = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = result;
    }

    return result;
};

// 2nd try
var climbStairs = function(n) {
    if (n <= 2) return n;
    var stepOne = 1;
    var stepTwo = 2;
    var result;
    for (var i = 2; i < n; i++) {
        result = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = result;
    }

    return result;
};

// recursive, exponential complexity. Not accepted
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n > 2) return climbStairs(n-2) + climbStairs(n-1);
};

// not optimal
var climbStairs = function(n) {
    var f = [1, 2];
    for (var i = 2; i < n; i++) {
        f[i] = f[i-1] + f[i-2];
    }

    return f[n - 1];
};
