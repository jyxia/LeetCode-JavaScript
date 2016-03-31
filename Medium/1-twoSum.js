/**
 * key: Use object in JavaScript for hashmap. track target - nums[i] at position i
 * O(N)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsMap = {};
    var results = [];
    for (var i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in numsMap) {
            results[1] = i;
            results[0] = numsMap[target - nums[i]];
            return results;
        }
        numsMap[nums[i]] = i;
    }

    return results;
};
