/**
 * Binary search. In the rotated array, there must be a half of the array in sorted order.
 * @see the recursive method. If the target is in the sorted half, binary search the target in
 * this half. Otherwise, search the target in the other half. And recursively do this process until
 * the target is found.
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
};

// Interative
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left < right) {
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target <= nums[right] && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return nums[left] === target ? left : -1;
};
