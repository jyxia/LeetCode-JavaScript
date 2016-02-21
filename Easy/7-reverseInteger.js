/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var revX = 0;
    var absX = Math.abs(x);
    while (absX > 0) {
        var last = absX % 10;
        revX = revX * 10 + last;
        absX = (absX - last) / 10;
    }

    // in case overflow, in JavaScript maximum number is 2^31 - 1
    if (revX > Math.pow(2, 31) - 1) return 0;

    if (x < 0) revX = -revX;
    return revX;
};
