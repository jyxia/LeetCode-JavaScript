/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Key: similar to every house in previous hourse rob problems, each node store two values,
 * first value is to store the max value if the node will be robbed. The second value is the vaule
 * if the node will not be robbed.
 * In the first case, the value is straightforward to calculate, that is, current node's val
 * plus the second value from it's child nodes' second value (not robbed).
 * In the second case, because the node is not going to be robbed, its children can be robbed
 * or not robbed. So the value is the max value of the left child's two values plus the right child's
 * max value from the two values.
 *
 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function(root) {
     var result = robDFS(root);
     return Math.max(result[0], result[1]);
 };

 var robDFS = function(root) {
     if (!root) return [0, 0];
     var result = [];
     var leftResults = robDFS(root.left);
     var rightResults = robDFS(root.right);
     result[0] = root.val + leftResults[1] + rightResults[1];
     result[1] = Math.max(leftResults[0], leftResults[1]) + Math.max(rightResults[0], rightResults[1]);
     return result;
 };


// not right, why?
var rob = function(root) {
    var cachedResult = {};
    return robHelper(root, cachedResult);
};

var robHelper = function(root, cachedResult) {
    if (!root)  return 0;
    if (cachedResult.hasOwnProperty(root))  {
        return cachedResult[root];
    }
    var val = 0;

    if (root.left !== null) {
        val += robHelper(root.left.left, cachedResult) + robHelper(root.left.right, cachedResult);
            console.log(root, val);
    }

    if (root.right !== null) {
        val += robHelper(root.right.left, cachedResult) + robHelper(root.right.right, cachedResult);
            console.log(root, val);

    }

    val = Math.max(val + root.val, robHelper(root.left, cachedResult) + robHelper(root.right, cachedResult));
    cachedResult[root] = val;

    return val;
};
