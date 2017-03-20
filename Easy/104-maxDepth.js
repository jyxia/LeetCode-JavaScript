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

// second try
var maxDepth = function(root) {
    if (!root) return 0;
    var lHeight = maxDepth(root.left) + 1;
    var rHeight = maxDepth(root.right) + 1;
    return lHeight > rHeight ? lHeight : rHeight;
};

// simplist
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
