/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var squareSums = [n];
    while (n !== 1) {
        n = squareSum(n);
        // check this square sum num exists or not.
        var isSquareSumApeared = squareSums.indexOf(n) > -1;
        if (isSquareSumApeared) return false;
        squareSums.push(n);
    }
    return true;
};

var squareSum = function(n) {
    var sum = 0;
    while (n > 0) {
        var lastDigit = n % 10;
        sum += lastDigit * lastDigit;
        n = Math.floor(n / 10);
    }
    return sum;
}
