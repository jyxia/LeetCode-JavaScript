/**
 * @param {number} n
 * @return {boolean}
 */
// recursive
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    return n % 3 === 0 && isPowerOfThree(Math.floor(n / 3));
};

// iterative Ways
var isPowerOfThree = function(n) {
    if (n > 1) {
        while (n % 3 === 0) {
            n = Math.floor(n / 3);
        }
    }
    return n === 1;
};
