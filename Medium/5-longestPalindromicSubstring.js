/**
 * Key: see inline comments. O(N^2). Space O(1).
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return s;
    var longest = s.substring(0, 1);
    for (var i = 0; i < s.length; i++) {
        // odd
        var tmp = getPalindromeSubstring(s, i, i);
        if (tmp.length > longest.length) {
            longest = tmp;
        }

        // even, get longest palindrome with center of i, i+1
        tmp = getPalindromeSubstring(s, i, i + 1);
        if (tmp.length > longest.length) {
            longest = tmp;
        }
    }

    return longest;
};

// Given a center, either one letter or two letter,
// Find longest palindrome
var getPalindromeSubstring = function(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }

    return s.substring(i + 1, j);
};


// dp method, should work. memory exceed limit
// bottom-up.
var longestPalindrome = function(s) {
    if (!s) return s;
    var longest = s.substring(0, 1);
    var length = s.length;
    var dp = [];
    var maxLength = 1;
    for (var i = length - 1; i >= 0; i--) {
        dp[i] = [];
        for (var j = i; j < length; j++) {
            // j - i <= 2 is important, in case i + 1 is out of array boundary.
            if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1;
                    longest = s.substring(i, j + 1);
                }
            }
        }
    }

    return longest;
};
