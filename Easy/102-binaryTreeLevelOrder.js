/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    var preLevel = [root], currLevel = [root];
    var result = [[root.val]];
    while (true) {
        if (currLevel.length === 0) break;
        var val = [];
        currLevel = [];
        for (var i = 0; i < preLevel.length; i++) {
            if (preLevel[i].left) {
                currLevel.push(preLevel[i].left);
                val.push(preLevel[i].left.val);
            }
            if (preLevel[i].right) {
                currLevel.push(preLevel[i].right);
                val.push(preLevel[i].right.val);
            }
        }
        preLevel = [];
        preLevel = currLevel;
        if (val.length > 0) result.push(val);
    }

    return result;
};

// second try
var levelOrder = function(root) {
    var results = [];
    if (!root) return results;
    var prevLevel = [root];
    var currLevel = [];
    var result = [];

    while (prevLevel.length > 0) {
        while (prevLevel.length > 0) {
            var node = prevLevel.shift();
            result.push(node.val);
            if (node.left) {
                currLevel.push(node.left);
            }
            if (node.right) {
                currLevel.push(node.right);
            }
        }
        results.push(result);
        prevLevel = currLevel;
        currLevel = [];
        result = [];
    }

    return results;
};

// third try, recursive. DFS.
var levelOrder = function(root) {
    var results = [];
    helper(results, root, 0);
    return results;
};

var helper = function(results, node, level) {
    if (!node) return results;
    if (level === results.length) {
        results[level] = [];
    }
    results[level].push(node.val);
    helper(results, node.left, level + 1);
    helper(results, node.right, level + 1);
};


// 4th try
var levelOrder = function(root) {
    var results = [];
    var prevLevel = [];
    var currentLevel = [root];

    if (!root) {
        return results;
    }

    while (currentLevel.length > 0) {
        var result = [];
        prevLevel = currentLevel.slice();
        currentLevel = [];

        while (prevLevel.length > 0) {
            var node = prevLevel.shift();
            result.push(node.val);
            if (node.left) {
                currentLevel.push(node.left);
            }
            if (node.right) {
                currentLevel.push(node.right);
            }
        }

        results.push(result);
    }

    return results;
};
