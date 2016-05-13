/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var MIN = -(Math.pow(2, 53) - 1);
    var MAX = Math.pow(2, 53) - 1;
    return helper(root, MIN, MAX);
};

var helper = function(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};
