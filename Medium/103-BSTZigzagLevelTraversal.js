/**
 * Key: same idea as binary tree level order traversal,
 * if the level is odd, insert the node to the begining of the level result array
 * if the level is even, insert the node to the end of the level result array
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var results = [];
    helper(results, root, 0);
    return results;
};

var helper = function(results, node, level) {
    if (!node) return results;
    if (level >= results.length) {
        results[level] = [];
    }
    if (level % 2 === 0) {
        results[level].push(node.val);
    } else {
        results[level].unshift(node.val);
    }

    helper(results, node.left, level + 1);
    helper(results, node.right, level + 1);
};
