/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var result = [];
  var results = [];
  pathSumHelper(root, sum, result, results);
  return results;
};

var pathSumHelper = function(root, sum, result, results) {
  if (!root) {
      return;
  }
  result.push(root.val);
  if (!root.left && !root.right && sum === root.val) {
      results.push(result.slice());
  }
  pathSumHelper(root.left, sum - root.val, result, results);
  pathSumHelper(root.right, sum - root.val, result, results);
  result.pop();
};
