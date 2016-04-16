/**
 * Key: Use two pointers. First pointer is for the a newly(modified) generated array
 * as long as it doesn't have more than two more Duplicates, the original point
 * keeps moving...
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var newStart = 0;
    for (var i = 0; i < nums.length; i++) {
        if (newStart < 2 || nums[i] > nums[newStart - 2]) {
            nums[newStart] = nums[i];
            newStart++;
        }
    }

    return newStart;
};
