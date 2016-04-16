/**
 * Key: same solution as 26?
 * Two pointers
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var start = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[start] = nums[i];
            start++;
        }
    }

    return start;
};
