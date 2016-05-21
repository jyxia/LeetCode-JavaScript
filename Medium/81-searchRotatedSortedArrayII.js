/**
 * Because duplicates are allowed in the array, consider the following two scenarios
 * 1. [1,1,3,1,1,1,1,1,1,1,1,1] 2. [1,1,1,1,1,1,1,1,1,1,1,1,3]
 * if nums[mid] === nums[lo], that means:
 * 1) all lefts are 1
 * 2) there is a different number exists in this half.
 * So, we need to increase lo one. --> worst case is the second array.O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var lo = 0;
    var hi = nums.length - 1;

    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) return true;

        if (nums[lo] < nums[mid]) {
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else if (nums[lo] > nums[mid]) {
            if (target <= nums[hi] && target > nums[mid]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        } else {
            lo += 1;
        }
    }

    return false;

};
