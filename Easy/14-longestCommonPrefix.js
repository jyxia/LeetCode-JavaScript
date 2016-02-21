/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    var firstString = strs[0];
    var commonLength = firstString.length;
    for (var i = 1; i < strs.length; i++) {
        for (var j = 0; j < commonLength; j++) {
            if (!strs[i][j]) break;
            if (firstString[j] !== strs[i][j]) break;
        }
        commonLength = j;
    }

    return firstString.substring(0, commonLength);
};
