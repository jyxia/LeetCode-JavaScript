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

// second try
var findMin = function(nums) {
    var lo = 0;
    var hi = nums.length - 1;

    while (lo <= hi) {
        if (nums[lo] < nums[hi]) return nums[lo];
        var mid = lo + Math.floor((hi - lo) / 2);
        if (nums[lo] <= nums[mid]) {
            // this case, minimun must exist in the second half
            lo = mid + 1;
        } else {
            // this case, mininum can be mid itself or must exist in the first half.
            hi = mid;
        }
    }

    // if hi < lo, then nums[hi] is the minum.
    return nums[hi];
};
