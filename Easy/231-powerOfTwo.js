/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    if((n & (n-1)) === 0) return true;
    return false;
};
