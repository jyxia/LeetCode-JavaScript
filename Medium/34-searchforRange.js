/**
 * Key: Two rounds of binary search, 1) first the left index, 2) find the right index
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var lo = 0;
    var hi = nums.length - 1;
    var result = [-1, -1];

    while (lo < hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    if (nums[lo] !== target) return result;
    else result[0] = lo;

    hi = nums.length - 1;
    while (lo < hi) {
        // this +1 is very important!!! Make mid biased to the right
        var mid = lo + Math.floor((hi - lo) / 2) + 1;
        if (nums[mid] > target) hi = mid - 1;
        else lo = mid;
    }
    result[1] = lo;

    return result;
};
