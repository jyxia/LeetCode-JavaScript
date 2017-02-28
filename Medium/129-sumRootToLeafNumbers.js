/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if (!root) return 0;
    var total = [];
    helper(root, 0, total);
    var sum = 0;
    for (var i = 0; i < total.length; i++) {
        sum += total[i];
    }
    return sum;
};

var helper = function(root, sum, total) {
    sum = 10 * sum + root.val;
    if (root.left === null && root.right === null) {
        total.push(sum);
        return;
    }
    if (root.left) {
        helper(root.left, sum, total);
    }
    if (root.right) {
        helper(root.right, sum, total);
    }
};

// a better and more concise solution
var sumNumbers = function(root) {
    return helper(root, 0);
};

var helper = function(root, sum) {
    if (!root)  return 0;
    if (root.left === null && root.right === null) {
        return 10 * sum + root.val;
    }
    return  helper(root.left, 10 * sum + root.val)
            + helper(root.right, 10 * sum + root.val);
};

// a third DFS method. Top-down
var sumNumbers = function(root) {
    if (!root) return 0;
    return helper(root, 0, 0);
};

function helper(root, currNum, sum) {
    if (!root) return sum;
    currNum = root.val + 10 * currNum;
    if (!root.left && !root.right) {
        sum += currNum;
        return sum;
    }
    return helper(root.left, currNum, sum) + helper(root.right, currNum, sum)
}
