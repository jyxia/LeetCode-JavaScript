/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a, b) {
        return a - b;
    });
    var result = [];
    var results = [];
    combinationSum2Helper(candidates, result, results, target, 0);
    return results;
};

var combinationSum2Helper = function(candidates, result, results, target, start) {
  if (target === 0) {
      results.push(deepCopy(result.slice()));
      return;
  }

  for (var i = start; i < candidates.length; i++) {
      if (target < 0) break;
      if (i > start && candidates[i] === candidates[i - 1]) {
          continue;
      } else {
          result.push(candidates[i]);
          combinationSum2Helper(candidates, result, results, target - candidates[i], i + 1);
          result.pop();
      }
  }
};
