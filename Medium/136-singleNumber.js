/**
 * @param {number[]} nums
 * @return {number}
 */
// accepted, but not perfect
var singleNumber = function(nums) {
  var appears = {};
  for (var i = 0; i < nums.length; i++) {
    if (appears[nums[i]]) {
      delete appears[nums[i]];
    } else {
      appears[nums[i]] = 1;
    }
  }

  return parseInt(Object.keys(appears)[0]);
};

// a better solution: use XOR. XOR same number is 0
var singleNumber = function(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result = nums[i] ^ result;
    }
    return result;
};
