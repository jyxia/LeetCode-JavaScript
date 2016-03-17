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
var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];

    while (queue.length > 0) {
        result.push(queue[queue.length - 1].val);
        var nextLevel = [];
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].left) {
                nextLevel.push(queue[i].left);
            }
            if (queue[i].right) {
                nextLevel.push(queue[i].right);
            }
        }
        queue = nextLevel;
    }

    return result;
};

// more concise, no need to track each level.
var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];

    while (queue.length > 0) {
        result.push(queue[queue.length - 1].val);
        var queueLength = queue.length;
        for (var i = 0; i < queueLength; i++) {
            var node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
};
