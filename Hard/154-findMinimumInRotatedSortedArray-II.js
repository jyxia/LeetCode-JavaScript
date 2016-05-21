/**
 * Similar to 153-findMinimumInRotatedSortedArray, and 81-searchRotatedSortedArrayII,
 * combile the solutions from these two.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var lo = 0;
    var hi = nums.length - 1;
    while (lo <= hi) {
        if (nums[lo] < nums[hi]) return nums[lo];
        var mid = lo + Math.floor((hi - lo) / 2);
        if (nums[lo] < nums[mid]) lo = mid + 1;
        else if (nums[lo] > nums[mid]) hi = mid;
        else lo++;
    }

    return nums[hi];
};
