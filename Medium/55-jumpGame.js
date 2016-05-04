/**
 * Key: one scenario return false, is when you meet 0 and the max move can't reach to the end.
 * becaue no moves can be made when the element is 0. 
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }

    return true;
};
