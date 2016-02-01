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
// not accepted!!
var maxDepth = function(root) {
  if (root === null) { return 0; }
  if (maxDepth(root.left) > maxDepth(root.right)) {
    root = root.left;
  } else {
    root = root.right;
  }
  return maxDepth(root) + 1;
};

// accepted
var maxDepth = function(root) {
  var max = 0;
  var lmax = maxDepth(root.left);
  var rmax = maxDepth(root.right);
  if (lmax > rmax) {
      root = root.left;
      max = lmax;
  } else {
      root = root.right;
      max = rmax;
  }
  return max + 1;
}
