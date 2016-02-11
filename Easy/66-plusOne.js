/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var length = digits.length;
    var index = length - 1;
    while (index >= 0) {
        if (++digits[index] < 10) break;
        digits[index] -= 10;
        if (index === 0) {
            digits.unshift(1);
            break;
        }
        index--;
    }

    return digits;

};
