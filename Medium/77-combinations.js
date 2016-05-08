/**
 * Same idea as permutation
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
     var result = [];
     var results = [];
     combineHelper(n, k, 1, result, results);
     return results;
 };

 var combineHelper = function(n, k, start, result, results) {
     if (k === 0) {
         results.push(result.slice());
         return results;
     }

     for (var i = start; i <=n; i++) {
         result.push(i);
         combineHelper(n, k - 1, i + 1, result, results);
         result.pop(i);
     }
 };
