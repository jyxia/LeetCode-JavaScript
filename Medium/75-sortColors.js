/**
 * Key: move all 2s to the end, and move all 0s to the beginning.
 * Use two pointers to track start and end respectively.
 * Move 2s first.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    for (var i = 0; i <= end; i++) {
        while (nums[i] === 2 && i < end) {
            swap(nums, i, end);
            end--;
        }
        while (nums[i] === 0 && i > start) {
            swap(nums, i, start);
            start++;
        }
    }
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};
