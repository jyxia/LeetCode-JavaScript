/**
 * Solution: 1. priority queue, O(n*log(k)), however JavaScript doesn't natively support heap
* 2. bucket sort
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }

    var bucket = [];
    for (var key in map) {
        var keyVal = parseInt(key, 10);
        bucket[map[key]] ? bucket[map[key]].push(keyVal) : bucket[map[key]] = [keyVal];
    }

    var result = [];

    for (var j = bucket.length - 1; j > 0; j--) {
        if (bucket[j]) {
            result = result.concat(bucket[j]);
        }

        if (result.length >= k) break;
    }

    return result;

};
