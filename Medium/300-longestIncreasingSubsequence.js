/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;

    var seqLength = [];
    for (i = 0; i < nums.length; i++) {
        seqLength[i] = 1;
    }

    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (j < i && nums[j] < nums[i]) {
                seqLength[i] = Math.max(seqLength[j] + 1, seqLength[i]);
            }
        }
    }

    return Math.max.apply(Math, seqLength);
};

// a better solution? O(NlongN)
