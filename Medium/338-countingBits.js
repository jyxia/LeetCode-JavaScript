/**
 * Solution: f(i) = f(i/2) + i % 2;
 * the bit nums = the bit nums of half of the number, and plus 1 if the last digit of the bit number is 1.
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [0];
    for (var i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }

    return result;
};
