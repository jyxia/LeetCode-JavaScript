/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// First try, Memory Limit Exceeded
var permuteUnique = function(nums) {
    if (nums.length === 0) return nums;
    nums.sort(function(a, b) {
        a - b;
    });
    var results = [];
    permutation(results, nums, 0);
    return results;
};

var permutation = function(results, nums, start) {
    if (start >= nums.length) {
        results.push(deepCopyArray(nums));
        return;
    }

    for (var i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        swap(nums, i, start);
        permutation(results, nums, start + 1);
        swap(nums, i, start);
    }
};

var swap = function(nums, i, j) {
    if (i === j) return;
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};


var deepCopyArray = function(nums) {
    var newNums = [];
    for (var i = 0; i < nums.length; i++) {
        newNums[i] = nums[i];
    }
    return newNums;
};
