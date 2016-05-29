/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if (!s) return 0;
    var length = s.length;
    var isPal = [];
    for (var i = length - 1; i >= 0; i--) {
        isPal[i] = [];
        for(var j = i; j < length; j++) {
            if ((j - i <= 2 || isPal[i+1][j-1]) && s[i] == s[j])
                isPal[i][j] = true;
        }
    }

    var cut = [-1];
    for (i = 1; i <= length; i++) {
        cut[i] = i;
        for (j = i - 1; j >= 0; j--) {
            if (isPal[j][i - 1]) {
              cut[i] = Math.min(cut[i], cut[j] + 1);
            }
        }
    }
    return cut[length];
};
