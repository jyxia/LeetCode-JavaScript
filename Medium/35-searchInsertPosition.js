/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// it not O(logN)
var searchInsert = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] >= target) return i;
  }

  return nums.length;
};

// because it is a sorted array, we can use binary search.
var searchInsert = function(nums, target) {
  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
      var mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === target) return mid;
      if (target < nums[mid]) high = mid - 1;
      else low = mid + 1;
  }

  return low;
};
