/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
    var oRoot = root;
    flatten(root.left);
    flatten(root.right);
    var oRight = oRoot.right;
    oRoot.right = oRoot.left;
    oRoot.left = null;
    while (oRoot.right) oRoot = oRoot.right;
    oRoot.right = oRight;
};
