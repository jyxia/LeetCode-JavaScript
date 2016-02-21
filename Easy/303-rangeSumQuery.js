/**
 * Key: Dynamic Programming
 * add an array to track the sum of previous elements
 * sums[i] = sum[i-1] + nums[i-1];
 * sumRange[i, j] = sums[j+1] - sums[i];
 *
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [0];
    for (var i = 1; i <= nums.length; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i - 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
