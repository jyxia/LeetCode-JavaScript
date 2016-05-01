/**
 * @param {number[]} nums
 * @return {number}
 */
// accepted, but not good.
var majorityElement = function(nums) {
    var appears = {};
    for (var i = 0; i < nums.length; i++) {
       if(appears[nums[i]]) {
           appears[nums[i]]++;
       } else {
           appears[nums[i]] = 1;
       }
    }

    for (key in appears) {
        if (appears[key] >= nums.length / 2) {
            return parseInt(key);
        }
    }
};

// better solution
var majorityElement = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var mid = Math.floor(nums.length / 2);
    return nums[mid];
};
