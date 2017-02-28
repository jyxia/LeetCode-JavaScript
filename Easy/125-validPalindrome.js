/**
 * Key: use regular expression to find only alpha and numeric letters.
 * Two pointers: start and end
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var pattern = /[a-z0-9]/gi;
    s = s.match(pattern);
    if (!s || s.length === 1) return true;
    for (var i = 0; i < s.length / 2; i++) {
        if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) return false;
    }

    return true;
};
