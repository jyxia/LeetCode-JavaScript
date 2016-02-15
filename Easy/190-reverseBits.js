/**
 * the key is to use bit AND &, after AND 1, only the last bit is reseved.
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var result = 0;
    for (var i = 0; i < 32; i++) {
        var lastBit = n & 1;
        result += lastBit * Math.pow(2, 31 - i);
        n >>= 1;
    }
    return result;
};
