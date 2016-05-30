/**
 * permutation of A[1..n] equals to
 * A[1] + permutation of (A[1..n] - A[1])
 * A[2] + permutation of (A[1..n] - A[2])
 * ...
 * A[n] + permutation of (A[1..n] - A[n])
 * Everytime, swap the beginning element with current element, and do the permutation
 * Once the passed nums array is changed, we should have a deep copy of the array and push
 * it to the final results array.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return nums;
    var results = [];
    permuteHelper(0, nums, results);
    return results;
};

var permuteHelper = function(start, nums, results) {
    if (start === nums.length) {
        results.push(nums.slice());
        return;
    }

    for (var i = start; i < nums.length; i++) {
        swap(nums, start, i);
        permuteHelper(start + 1, nums, results);
        swap(nums, start, i);
    }
};

var swap = function(nums, i, j) {
    if (i === j) return;
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

// A iterative version
// for example: nums=[1,2,3]
// step1: [1]
// step2: inserst 2 to [1], two possibilities: [2,1], [1,2]
// step2: inserst 3 to [1,2] and [2,1],
// Three possibilities for each: [3,2,1], [2,3,1], [2,1,3] & [3,1,2], [1,3,2], [1,2,3]
var permute = function(nums) {
    if (nums.length === 0) return nums;
    var results = [[nums[0]]];
    for (var i = 1; i < nums.length; i++) {
        var newResults = [];
        for (var m = 0; m < results.length; m++) {
            for (var j = 0; j <= i; j++) {
                // still need a deep copy of results[m],
                // otherwise, a change to list will affect results array.
                var list = results[m].slice();
                list.splice(j, 0, nums[i]);
                newResults.push(list);
            }
        }
        results = newResults;
    }

    return results;
};

// Backtracking. 
var permute = function(nums) {
    var result = [];
    var results = [];
    var isVisited = [];
    dfsHelper(nums, isVisited, result, results);
    return results;
};

var dfsHelper = function(nums, isVisited, result, results) {
    if (result.length === nums.length) {
        results.push(result.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        if (isVisited[i]) continue;
        isVisited[i] = true;
        result.push(nums[i]);
        dfsHelper(nums, isVisited, result, results);
        result.pop();
        isVisited[i] = false;
    }
};
