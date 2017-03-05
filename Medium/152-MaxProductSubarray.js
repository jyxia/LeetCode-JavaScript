/**
 * Solution: Two dp arrays: maxDP tracks the Maximum product at index i,
 * minDP tracks the Minimum product at index i, either of them can be negative Numbers
 * so if nums[i + 1] is negative, then maxDP[i+1] can be a product of minDP[i] * nums[i+1]
 * @see the for loop body
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    var result = nums[0];
    var maxDP = [nums[0]];
    var minDP = [nums[0]];

    for (var i = 1; i < nums.length; i++) {
        maxDP[i] = Math.max(nums[i], maxDP[i - 1] * nums[i], minDP[i - 1] * nums[i]);
        minDP[i] = Math.min(nums[i], minDP[i - 1] * nums[i], maxDP[i - 1] * nums[i]);
        result = Math.max(maxDP[i], result);
    }

    return result;
};

// 2nd try
var maxProduct = function(nums) {
    var min = [nums[0]];
    var max = [nums[0]];
    var maxProduct = nums[0];

    for (var i = 1; i < nums.length; i++) {
        min.push(Math.min(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]));
        max.push(Math.max(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]));
        maxProduct = Math.max(maxProduct, max[i]);
    }

    return maxProduct;
};
