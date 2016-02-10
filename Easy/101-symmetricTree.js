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
// recursive
var isSymmetric = function(root) {
    if (!root) return true;
    return isSymmetricHelper(root.left, root.right);
};

var isSymmetricHelper = function(left, right) {
  if (!left || !right) return left === right;
  if (left.val !== right.val) return false;
  else return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
};

// iterative
var isSymmetric = function(root) {
    if (!root) return true;
    var treeStack = [];
    if (root.left) {
        if (!root.right) return false;
        treeStack.push(root.left);
        treeStack.push(root.right);
    } else if (root.right) return false;

    while(treeStack.length > 0) {
        if (treeStack.length % 2 !== 0) return false;
        var right = treeStack.pop();
        var left = treeStack.pop();
        if (right.val !== left.val) return false;
        if (left.left) {
            if (!right.right) return false;
            treeStack.push(left.left);
            treeStack.push(right.right);
        } else if (right.right) return false;

        if (right.left) {
            if (!left.right) return false;
            treeStack.push(right.left);
            treeStack.push(left.right);
        } else if (left.right) return false;
    }

    return true;
};
