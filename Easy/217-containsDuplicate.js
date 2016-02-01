/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var appears = {};
  var containsDuplicate = false;
  for (var i = 0; i < nums.length; i++) {
    if (appears[nums[i]]) {
      appears[nums[i]] += 1;
      containsDuplicate = true;
      break;
    } else {
      appears[nums[i]] = 1;
    }
  }

  return containsDuplicate;
};
