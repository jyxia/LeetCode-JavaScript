/**
 * @param {string} s
 * @return {number}
 */

// not accepted!!! time exceeded!
var lengthOfLongestSubstring = function(s) {
    var visitedChars = {};
    var len = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] in visitedChars) {
            len = Math.max(len, Object.size(visitedChars));
            delete visitedChars[s[i]];
        }
        visitedChars[s[i]] = i;
    }

    return Math.max(len, Object.size(visitedChars));
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// accepted, O(N)
var lengthOfLongestSubstring = function(s) {
    var visitedChars = {};
    var len = 0;
    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] in visitedChars) {
            len = Math.max(len, i - j);
            j = Math.max(j, visitedChars[s[i]] + 1);
        }
        visitedChars[s[i]] = i;
    }

    return Math.max(len, s.length - j);
};
