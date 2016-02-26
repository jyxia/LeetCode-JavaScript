/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var high = nums.length - 1;
    return arrayToBSTHelper(nums, 0, high);
};

var arrayToBSTHelper = function(nums, low, high) {
    if (low > high) return null;
    var mid = low + Math.floor((high - low) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = arrayToBSTHelper(nums, low, mid - 1);
    root.right = arrayToBSTHelper(nums, mid + 1, high);
    return root;
};
