/**
 * @param {number[]} nums
 * @return {number}
 */
// O(N) space, O(N) time
var rob = function(nums) {
    if (nums.length === 0) return 0;
    // maxAmount[i], the maxAmount robbed when the robber arrives at ith house,
    // the robber has not robber the ith house yet.
    var maxAmount = [0, nums[0]];
    for (var i = 2; i <= nums.length; i++) {
        maxAmount[i] = Math.max(maxAmount[i-1], (maxAmount[i-2] + nums[i-1]));
    }

    return maxAmount.pop();
};

// O(1) space, O(N) time
var rob = function(nums) {
    if (nums.length === 0) return 0;
    var prevMax = 0;
    // the currMax is the money the robber has robbed when the robber arrives at ith house,
    // the robber has not robber the ith house yet.
    var currMax = nums[0];
    for (var i = 2; i <= nums.length; i++) {
        var tmp = currMax;
        currMax = Math.max(currMax, (prevMax + nums[i-1]));
        prevMax = tmp;
    }

    return currMax;
};
