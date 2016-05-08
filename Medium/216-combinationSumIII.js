/**
 * Key: backtracking, similar to subsets
 * Only save combinations with length k
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var nums = [];
    for (var i = 1; i <= 9; i++) nums[i] = i;
    var result = [];
    var results = [];
    helper(0, k, n, nums, result, results);
    return results;
};

var helper = function(start, k, n, nums, result, results) {
    if (n === 0 && k === 0) {
        results.push(result.slice());
        return results;
    }

    for (var i = start; i < nums.length; i++) {
        if (n < 0) break;
        result.push(nums[i]);
        helper(i + 1, k - 1, n - nums[i], nums, result, results);
        result.pop(nums[i])
    }
};
