/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var lo = 1;
    var hi = num;
    var isPS = false;

    if (num === 1) {
        isPS = true;
    }

    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        var midSquare = mid * mid;
        if (midSquare === num) {
            isPS = true;
            break;
        } else if (midSquare > num) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return isPS;
};
