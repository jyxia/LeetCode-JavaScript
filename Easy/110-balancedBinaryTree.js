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
var isBalanced = function(root) {
    if (!root) return true;
    if (getHeight(root) === -1) return false;
    return true;
};

var getHeight = function(root) {
    if (!root) return 0;
    var leftHeight = getHeight(root.left);
    if (leftHeight === -1) return -1;
    var rightHeight = getHeight(root.right);
    if (rightHeight === -1) return -1;
    if (leftHeight === -1 || rightHeight === -1) return -1;
    var heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
}
