/**
 * Same idea as 3 sum, just check the abs value of every new 3 sum result and target
 * use a variable 'result' to track minimum result.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });

    var result = nums[0] + nums[1] + nums[nums.length - 1];

    for (var i = 0; i < nums.length - 2; i++) {
        var lo = i + 1;
        var hi = nums.length - 1;
        while (lo < hi) {
            var sum = nums[i] + nums[lo] + nums[hi];
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
                if (result === target) return result;
            }

            if (sum > target) {
                hi--;
            } else {
                lo++;
            }

        }
    }

    return result;

};
