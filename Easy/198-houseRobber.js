/**
 * dp[i] = Math.max(dp[i-1], dp[i-2]+num[i-1])
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
        maxAmount[i] = Math.max(maxAmount[i - 1], (maxAmount[i - 2] + nums[i - 1]));
    }

    return maxAmount.pop();
};

// O(1) space, O(N) time
// when a robber arrives at a houose, he has two options: rob or not rob. We use two variables (rob, notRob)
// to track the maxAmount of these two options for the house the robber arrived, say ith house,
// and find the max amount from these two values. So, when the robber arrives at ith house, if
// he decided to rob current ith house, then the max amount he can rob is i-1 th house's max amount
// of not robbed plus this house's amount (nums[i]). If he decided not to rob current ith house, then
// the max amount he can rob (or has robbed) at current (ith) house is the maximum value between robbed
// not robber at (i-1)th house.
//
var rob = function(nums) {
    var rob = 0;
    var notRob = 0;

    for (var i = 0; i < nums.length; i++) {
        var tmp = rob;
        rob = notRobCurrHouse + nums[i];
        notRobCurrHouse = Math.max(tmp, notRobCurrHouse);
    }

    return Math.max(rob, notRobCurrHouse);
};
