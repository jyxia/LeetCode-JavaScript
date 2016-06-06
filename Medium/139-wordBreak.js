/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */

// recursion, not accepted, time exceeds limits. O(N^2)
var wordBreak = function(s, wordDict) {
    return helper(s, wordDict, 0);
};

var helper = function(s, wordDict, start) {
    if (start === s.length) return true;
    // also let ... of is an ES6 feature
    for (var word of wordDict) {
        var wLength = word.length;
        if (s.substring(start, start + wLength) === word) {
            if (helper(s, wordDict, start + wLength)) return true;
        }
    }
    return false;
};

// Dynamic, accepted
var wordBreak = function(s, wordDict) {
    var canBreak = [true];
    for (var i = 0; i < s.length; i++) {
        if (!canBreak[i]) continue;
        for (var word of wordDict) {
            var wLength = word.length;
            if (canBreak[i + wLength]) continue;
            if (s.substring(i, i + wLength) === word) {
                canBreak[i + wLength]  = true;
            }
        }
    }
    return canBreak[s.length] ? true : false;
};
