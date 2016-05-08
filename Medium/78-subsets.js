/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a, b) {
       return a - b;
    });
    var result = [];
    var results = [result];
    subsetsHelper(0, nums, result, results);
    return results;
};

var subsetsHelper = function(start, nums, result, results) {
    if (start === nums.length) {
        return;
    }

    for (var i = start; i < nums.length; i++) {
        result.push(nums[i]);
        results.push(result.slice());
        // start from next element i, not the next element of 'start'
        subsetsHelper(i + 1, nums, result, results);
        result.pop(nums[i]);
    }
};
