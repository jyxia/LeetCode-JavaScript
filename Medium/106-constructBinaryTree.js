/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return helper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

var helper = function(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inEnd < inStart || postEnd < postStart) return null;
    var rootVal = postorder[postEnd];
    var root = new TreeNode(rootVal);
    for (var i = 0; i < inEnd; i++) {
        if (inorder[i] === rootVal) {
            break;
        }
    }
    root.left = helper(inorder, inStart , i - 1 , postorder, postStart, postStart + i - 1 - inStart);
    root.right = helper(inorder, i + 1, inEnd, postorder, postEnd - inEnd + i, postEnd - 1);
    return root;
};
