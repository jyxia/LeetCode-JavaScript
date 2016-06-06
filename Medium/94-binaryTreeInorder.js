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

// more concise and efficient
// as long as the left child is not empty, push it to the stack
// once left child reaches to the end (leaf), pop the last left, and visit,
// then assign its right node to be root, and repeat the process on current root (the right child)
var inorderTraversal = function(root) {
    var stack = [];
    var order = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        var node = stack.pop();
        order.push(node.val);
        root = node.right;
    }
    return order;
};
