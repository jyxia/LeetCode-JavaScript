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
      len = Math.max(len, Object.keys(visitedChars).length);
      i = visitedChars[s[i]];
      visitedChars = {};
    } else {
      visitedChars[s[i]] = i;
    }
  }
  
  return Math.max(len, Object.keys(visitedChars).length);
};
