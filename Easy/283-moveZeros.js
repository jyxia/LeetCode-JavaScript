/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var i = 0, j = nums.length;
  while (i < j) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      j--;
    } else {
      i++;
    }
  }
};

// two pointers
var moveZeroes = function(nums) {
    var newStart = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[newStart] = nums[i];
            newStart++;
        }
    }

    while (newStart < nums.length) {
        nums[newStart] = 0;
        newStart++;
    }
};
