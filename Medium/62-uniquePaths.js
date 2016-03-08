/**
 * Let t be total movements from (1, 1) to (m, n), t = m - 1 + n - 1;
 * Let k = m - 1 (the right movements)
 * then the total path is all combinations (m - 1) movements from (m + n - 2)
 * And C(t, k) = t! / (t-k)! * k! = (t * (t - 1) ... (t - k + 1)) / (1 * ... * k)
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var t = m + n - 2;
    var k = m - 1;
    var res = 1;

    for (var i = 1; i <= k; i++) {
        res *= (t - i + 1) / i
    }

    return res;
};
