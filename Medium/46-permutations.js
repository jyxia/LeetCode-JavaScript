/**
 * permutation of A[1..n] equals to
 * A[1] + permutation of (A[1..n] - A[1])
 * A[2] + permutation of (A[1..n] - A[2])
 * ...
 * A[n] + permutation of (A[1..n] - A[n])
 * Everytime, swap the beginning element with current element, and do the permutation
 * Once the passed nums array is changed, we should have a deep copy of the array and push
 * it to the final results array.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return nums;
    var results = [];
    permuteHelper(0, nums, results);
    return results;
};

var permuteHelper = function(start, nums, results) {
    if (start >= nums.length) {
        results.push(deepCopyArray(nums));
        return;
    }

    for (var i = start; i < nums.length; i++) {
        swap(nums, start, i);
        permuteHelper(start + 1, nums, results);
        swap(nums, start, i);
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
