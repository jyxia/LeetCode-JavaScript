/**
 * Backtracking. Same idea as combination.
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var result = [];
    var results = [];
    if (!digits || digits.length === 0) return results;
    combinationHelper(digits, results, result);
    return results;
};

var map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
    "0": ""
};

var combinationHelper = function(digits, results, result) {
    if (digits.length === 0) {
        results.push(result.join(''));
        return;
    }

    var letters = map[digits.substring(0, 1)];
    for (var i = 0; i < letters.length; i++) {
        result.push(letters[i]);
        combinationHelper(digits.substring(1), results, result);
        result.pop();
    }
};

// second try
var combinationHelper = function(digits, results, result) {
    if (!digits) {
        results.push(result.join(''));
        result = [];
        return;
    }
    var letters = map[digits[0]];
    for (var j = 0; j < letters.length; j++) {
        result.push(letters[j]);
        combinationHelper(digits.substring(1), results, result);
        result.pop();
    }
};
