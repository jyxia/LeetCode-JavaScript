/**
 * @see inline comments
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var nums = [];
    for (var i = 0; i < n; i ++) {
        nums.push(i + 1);
    }
    k--;
    var mod = 1;
    for (i = 1; i < n; i++) {
        mod *= i;
    }
    var result = '';
    for (i = 0; i < n; i++) {
        // find the index of current number's first digit
        var index = Math.floor(k / mod);
        k = k % mod;
        result += nums[index];
        // remove this used number from nums.
        nums.splice(index, 1);
        mod = Math.floor(mod / (n - i - 1));
    }

    return result;
};
