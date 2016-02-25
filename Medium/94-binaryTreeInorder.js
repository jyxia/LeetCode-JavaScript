/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];
    var order = [];
    while (stack.length > 0 || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            var node = stack.pop();
            order.push(node.val);
            if (node.right) root = node.right;
        }
    }

    return order;
};
