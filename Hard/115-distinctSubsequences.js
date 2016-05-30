/**
 * Solution: Dynamic programming
 * match[i][j], the number of matched substrings between s[0...i) and t[0...j).
 * if s[i-1] !== s[j-1], then the matched number equals to the matched number of s[0...i-1).
 * that is, match[i][j] = match[i-1][j].
 * if s[i-1] == s[j-1], the matched number is the mathched number when s[0...i-1] and t[0...j),
 * plus the matched number when s[0...j-1) and t[0...j-1).
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    if (!s) return 0;

    var match = [];
    for (var i = 0; i <= s.length; i++) {
        match[i] = [1];
    }

    for (var j = 1; j <= t.length; j++) {
        match[0][j] = 0;
    }

    for (i = 1; i <= s.length; i++) {
        for (j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) match[i][j] = match[i - 1][j - 1] + match[i - 1][j];
            else match[i][j] = match[i - 1][j];
        }
    }

    return match[s.length][t.length];

};

// just use one dimension array to store matched numbers
var numDistinct = function(s, t) {
    if (!s) return 0;
    if (t.length > s.length) return 0;

    var tLength = t.length;
    var sLength = s.length;

    var dp = [1];
    for (var i = 1; i <= tLength; i++) {
        dp.push(0);
    }

    for (i = 1; i <= sLength; i++) {
        for (j = tLength; j >= 1; j--) {
            if (s[i - 1] === t[j - 1]) dp[j] += dp[j - 1];
        }
    }

    return dp[tLength];

};
