/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * key: rightNodes is the stack to track right nodes.
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var rightNodes = [];
    var order = [];
    while (root || rightNodes.length > 0) {
        if (root) {
            order.push(root.val);
            if (root.right) rightNodes.push(root.right);
            root = root.left;
        } else {
          root = rightNodes.pop();
        }
    }
    return order;
};

// this is a more straightforward method, but slower than first one.
// stack tracks the node visit order
var preorderTraversal = function(root) {
    if (!root) return [];
    var result = [];
    var stack = [root];

    while (stack.length > 0) {
        var node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    return result;
};
