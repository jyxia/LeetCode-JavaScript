/**
 * solution: dp[i] = dp[i - 1] if s[i - 1] is valid (!= 0)
 * or dp[i] = dp[i-2] if s[i-1] is not valid, however s.substring(i-2, i) is valid ( >=10 && <=26)
 * or dp[i] = dp[i-1] + dp[i-2] is both s.substring(i-2, i), s.substring(i-1, i) are valid
 *
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0) return 0;
    var dp = [1];
    s[0] === '0' ? dp[1] = 0 : dp[1] = 1;

    for (var i = 2; i <= s.length; i++) {
        var prevTwo = parseInt(s.substring(i - 2, i));
        dp[i] = 0;
        if (s[i - 1] !== '0') dp[i] = dp[i - 1];
        if (prevTwo >= 10 && prevTwo <= 26 ) dp[i] += dp[i - 2];
    }

    return dp[s.length];
};
