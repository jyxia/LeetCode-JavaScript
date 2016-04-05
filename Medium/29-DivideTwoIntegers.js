/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// Time Limit Exceeded  
var divide = function(dividend, divisor) {
    if (divisor === 0) return 0;
    var aDividend = Math.abs(dividend);
    var aDivisor = Math.abs(divisor);

    var result = 0;
    while (aDividend >= aDivisor) {
        var shifts = 0;
        while (aDividend >= (aDivisor << shifts)) {
            shifts++;
        }
        result += (1 << (shifts - 1));
        aDividend -= (aDivisor << (shifts - 1));
    }

    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
        return result;
    } else {
        return -1 * result;
    }
};
