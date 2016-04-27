/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// remember: anagram also requires the appearance of the letter in both strings is same.
var isAnagram = function(s, t) {
    var letterCount = {};
    for (var i = 0; i < s.length; i++) {
       if (letterCount[s[i]]) letterCount[s[i]]++;
       else letterCount[s[i]] = 1;
    }
    for (var i = 0; i < t.length; i++) {
       if (letterCount[t[i]]) letterCount[t[i]]--;
       else letterCount[t[i]] = 1;
    }
    for (var key in letterCount) {
        if (letterCount[key] > 0) return false;
    }

    return true;
};
