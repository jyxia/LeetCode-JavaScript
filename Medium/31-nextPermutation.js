/**
 * search from right to left, find the first number smaller than it's next. (nums[i] < nums[i+1])
 * let's say the index is p;
 * have a second scan from right to left, find the first number bigger than nums[p], say the index is q,
 * swap element at p and q, then reverse all elements from p+1 to the last element of nums.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums || nums.length === 1) return;
    var p = nums.length - 1;
    var q = nums.length - 1;

    for (var i = p - 1; i >= 0; i--) {
        if (nums[i + 1] > nums[i]) {
            p = i;
            break;
        }
        p--;
    }

    for (var i = q; i > p; i--) {
        if (nums[i] > nums[p]) {
            var tmp = nums[p];
            nums[p] = nums[i];
            nums[i] = tmp;
            break;
        }
        q--;
    }

    if (p === 0 && q === 0) {
        reverse(nums, p);
        return;
    }

    reverse(nums, p + 1);
};

var reverse = function(nums, i) {
    var j = nums.length - 1;
    while (i < j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
    }
};
