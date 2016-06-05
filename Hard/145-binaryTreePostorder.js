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
// looks like there is a better way to implement
var postorderTraversal = function(root) {
    var result = [];
    if (!root) return result;
    var stack = [root];
    var preVisitedNode = null;

    while (stack.length > 0) {
        node = stack[stack.length - 1];
        if (!node.left && !node.right ||
            (preVisitedNode && (preVisitedNode === node.right || preVisitedNode === node.left))) {
            result.push(node.val);
            preVisitedNode = stack.pop();
        } else {
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
    }

    return result;
};

// an improved version
var postorderTraversal = function(root) {
    var result = [];
    if (!root) return result;
    var stack = [root];

    while (stack.length > 0) {
        var node = stack[stack.length - 1];
        if (!node.left && !node.right) {
            result.push(node.val);
            node = stack.pop();
        } else {
            if (node.right) {
                stack.push(node.right);
                node.right = null;
            }
            if (node.left) {
                stack.push(node.left);
                node.left = null;
            }
        }
    }

    return result;
};
