/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * e.g. preorder 12453768, inorder: 42516738,
 * from preorder, we know the first element is the root, then find root's index in
 * inorder, then the left side (in inorder) of root is the left subtree, and right side
 * after root is the right subtree.
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

var helper = function(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;
    var k = 0;
    for (var i = 0, length = inorder.length; i < length; i++) {
        if(preorder[preStart] === inorder[i]) {
            k = i;
            break;
        }
    }

    var root = new TreeNode(preorder[preStart]);
    // make sure inEnd - inStart === preEnd - preStart
    root.left = helper(preorder, preStart + 1, preStart + k - inStart, inorder, inStart, k - 1);
    root.right = helper(preorder, preEnd - inEnd + k + 1, preEnd, inorder, k + 1, inEnd);

    return root;
};
