/**
 * Key same solution as subsets, skip the duplicated nodes
 * @see line 23
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var result = [];
    var results = [result];
    helper(nums, 0, result, results);
    return results;
};

var helper = function(nums, start, result, results) {
    for (var i = start; i < nums.length; i++) {
        result.push(nums[i]);
        results.push(result.slice());
        helper(nums, i + 1, result, results);
        result.pop(nums[i]);
        while (nums[i] === nums[i + 1]) i++;
    }
};
