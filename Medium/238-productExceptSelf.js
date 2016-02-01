/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var productsOnRight = [];
    productsOnRight[nums.length - 1] = 1;
    for (var i = nums.length - 2; i >= 0; i--) {
        productsOnRight[i] = nums[i + 1] * productsOnRight[i + 1];
    }
    var productsOnLeft = 1;
    var results = [];
    for (var i = 0; i < nums.length; i++) {
        results[i] = productsOnLeft * productsOnRight[i];
        productsOnLeft *= nums[i];
    }
    return results;
};
