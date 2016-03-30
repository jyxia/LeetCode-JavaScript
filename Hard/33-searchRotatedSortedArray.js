/**
 * Binary search
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return searchHelper(nums, 0, nums.length - 1, target);
};

var searchHelper = function(nums, left, right, target) {
    if (right < left) return -1;

    var mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
        if (target >= nums[left] && target < nums[mid]) {
            return searchHelper(nums, left, mid - 1, target);
        } else {
            return searchHelper(nums, mid + 1, right, target);
        }
    } else {
        if (target <= nums[right] && target > nums[mid]) {
            return searchHelper(nums, mid + 1, right, target);
        } else {
            return searchHelper(nums, left, mid - 1, target);
        }
    }
}

// Interative, to be continued
