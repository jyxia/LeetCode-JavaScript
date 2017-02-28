/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var nSum = 0.5 * nums.length * (nums.length + 1);
  var numsSum = 0;
  for (var i = 0; i < nums.length; i++) {
    numsSum += nums[i];
  }
  return nSum - numsSum;
};

var missingNumber = function(nums) {
    var length = nums.length;
    var total = 0.5 * length * (length + 1);
    var numSum = 0;
    for (var i = 0; i < length; i++) {
        numSum += nums[i];
    }

    return total - numSum;
};

// solution 2 use bit manipulation
var missingNumber = function(nums) {
  var missNum = 0;
  for (var i = 0; i < nums.length; i++) {
    missNum ^= (i + 1) ^nums[i];
  }
  return missNum;
};
