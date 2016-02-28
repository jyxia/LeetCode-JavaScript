/**
 * Binary search. Be careful about the boundaries.
 * If the first element is larger than the last one, then we compute the element in the middle,
 * and compare it with the first element. If value of the element in the middle is larger than
 * the first element, we know the rotation is at the second half of this array.
 * Else, it is in the first half in the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var low = 0;
    var high = nums.length - 1;

    while (low <= high) {
        if (nums[low] <= nums[high]) return nums[low];
        var mid = low + Math.floor((high - low) / 2);
        if (nums[mid] >= nums[low]) low = mid + 1;
        else high = mid;
    }

    return nums[0];
};
