/**
 * Solution: backtracking, DFS
 *
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];
    var results = [];
    if (!s) return results;
    helper(s, 0, result, results);
    return results;
};

var helper = function(s, start, result, results) {
    if (start >= s.length) {
        results.push(result.slice());
        result = [];
    }

    for (var i = start; i < s.length; i++) {
        var newStr = s.substring(start, i + 1);
        if (isPalindrome(newStr)) {
          result.push(newStr);
          helper(s, i + 1, result, results);
          result.pop();
        }
    }
};

var isPalindrome = function(s) {
    if (!s || s.length === 1) return true;
    var length = s.length;
    for (var i = 0; i < length; i++) {
        if (s[i] !== s[length - i - 1]) return false;
    }

    return true;
};

// testing cases
// var s = 'aab';
// console.log(partition(s));

// second method, use a dp matrix. (isPal)
// Same O(n^2), but faster
var partition = function(s) {
    var result = [];
    var results = [];
    if (!s) return results;
    var length = s.length;
    var isPal = [];
    for (var i = length - 1; i >= 0; i--) {
        isPal[i] = [];
        for(var j = i; j < length; j++) {
            if ((j - i <= 2 || isPal[i+1][j-1]) && s[i] == s[j])
                isPal[i][j] = true;
        }
    }

    helper(s, 0, result, results, isPal);
    return results;
};

var helper = function(s, start, result, results, isPal) {
    if (start >= s.length) {
        results.push(result.slice());
        return;
    }

    for (var i = start; i < s.length; i++) {
        if (isPal[start][i]) {
            result.push(s.substring(start, i + 1));
            helper(s, i + 1, result, results, isPal);
            result.pop();
        }
    }
};
