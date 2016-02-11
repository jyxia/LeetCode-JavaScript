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
