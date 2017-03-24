/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// my own solution BFS, iterative
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    var next = [root];
    var maxArr = [];

    if (!root) {
        return maxArr;
    }

    while (next.length > 0) {
        var curr = next.slice();
        var max = -Number.MAX_VALUE;
        next = [];

        while (curr.length > 0) {
            var node = curr.shift();
            max = Math.max(node.val, max);

            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        }

        maxArr.push(max);
    }

    return maxArr;
};

// DFS
var largestValues = function(root) {
    var result = [];
    helper(root, result, 0);
    return result;
};

var helper = function(root, res, level) {
    if (!root) {
        return;
    }

    if (res.length === level) {
        res.push(root.val);
    } else {
        res[level] = Math.max(res[level], root.val);
    }

    helper(root.left, res, level + 1);
    helper(root.right, res, level + 1);
}
