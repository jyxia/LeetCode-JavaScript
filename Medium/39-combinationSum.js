/**
 * Key: backtracking. Be careful about JavaScript array sort.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(a, b) {
      return a - b;
    });
    var result = [];
    var results = [];
    combinationSumHelper(candidates, target, results, result, 0);
    return results;
};

var combinationSumHelper = function(candidates, target, results, result, start) {
    if (target === 0) {
        results.push(deepCopyArray(result));
        return;
    }

    for (var i = start; i < candidates.length; i++) {
        if (target < 0) break;
        result.push(candidates[i]);
        combinationSumHelper(candidates, target - candidates[i], results, result, i);
        result.pop();
    }
};

var deepCopyArray = function(nums) {
    var newNums = [];
    for (var i = 0; i < nums.length; i++) {
        newNums[i] = nums[i];
    }
    return newNums;
};
