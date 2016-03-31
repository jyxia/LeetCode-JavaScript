/**
 * Key: first pointer tracks from the first element to the last third element.
 * then, it is a 2sum problem for finding -nums[i] from the remaining elements.
 * no matter which pointer meets a duplicate, just skip the duplicate.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });

    var results = [];

    for (var i = 0; i < nums.length - 2; i++) {
        // there is a same number, because this number has been checked last time, skip it.
        if (i > 0 && nums[i] === nums[i-1]) continue;
        var lo = i + 1;
        var hi = nums.length - 1;
        var twoSum = 0 - nums[i];
        while (lo < hi) {
            if (nums[lo] + nums[hi] === twoSum) {
                results.push([nums[i], nums[lo], nums[hi]]);
                // there is a same number, because this number has been checked last time, skip it.
                while (lo < hi && nums[lo] === nums[lo+1]) lo++;
                while (lo < hi && nums[hi] === nums[hi-1]) hi--;
                lo++;
                hi--;
            } else if (nums[lo] + nums[hi] < twoSum) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return results;
};
