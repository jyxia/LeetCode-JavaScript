/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var strLength = s.length;
    var result = [];

    for (var i = 1; i < 4 && i < strLength - 2; i++) {
        for (var j = i + 1; j < 4 + i && j < strLength - 1; j++) {
            for (var k = j + 1; k < 4 + j && k < strLength; k++) {
                var str1 = s.substring(0, i);
                var str2 = s.substring(i, j);
                var str3 = s.substring(j, k);
                var str4 = s.substring(k, strLength);
                if (isValid(str1) && isValid(str2) && isValid(str3) && isValid(str4)) {
                    result.push(str1 + "." + str2 + "."+ str3 + "."+ str4);
                }
            }
        }
    }

    return result;
};

var isValid = function(str) {
    if ((str[0] === '0' && str.length > 1) || str.length > 3 || parseInt(str) > 255 || str.length === 0) {
        return false;
    }

    return true;
};
