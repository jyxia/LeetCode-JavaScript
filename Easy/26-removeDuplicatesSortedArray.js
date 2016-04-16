/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var start = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[start] !== nums[i]) {
            start++;
            nums[start] = nums[i];
        }
    }
    return start + 1;
};
