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

// second try, not good
var canJump = function(nums) {
    if (nums.length === 1) return true;
    var maxJump = 0;
    for (var i = 0; i < nums.length; i++) {
        maxJump = Math.max(maxJump, nums[i] + i);
        if (maxJump === i) return false;
        if (maxJump >= nums.length - 1) return true;
    }

    return false;
};

var canJump = function(nums) {
  if (nums.length < 1) return true;
  var maxNextJump = nums[0];

  for (var i = 1; i < nums.length; i++) {
    // jumped one step
    maxNextJump--;
    if (maxNextJump < 0) return false;
    // if steps at positin i is larger than maxNextJump, then nums[i] is the next jump steps.
    if (maxNextJump < nums[i]) maxNextJump = nums[i];
  }

  return true;
}
