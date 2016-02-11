/**
 * @param {number} n
 * @return {number}
 */
// the trick is to count 5s in prime factors
var trailingZeroes = function(n) {
    var nums = 0;
    var factor = 5;
    while (n >= factor) {
        nums += Math.floor(n / factor);
        factor *= 5;
    }

    return nums;
};
