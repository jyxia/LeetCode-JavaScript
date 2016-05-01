/**
 * key: sort each string in strs. If two strings are anagram to each other, then
 * after sorting, theses two strings are same. Use a map to track the same strings,
 * the string itself becomes the key, the value is the array of the anagram strings.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    for (var i = 0; i < strs.length; i++) {
        var strCopy = strs[i].split('');
        strCopy.sort(strCompare);
        if (strCopy.join('') in map) {
            map[strCopy.join('')].push(strs[i]);
        } else {
            map[strCopy.join('')] = [strs[i]];
        }
    }

    var result = [];
    for (var key in map) {
        result.push(map[key].sort(strCompare));
    }

    return result;
};

var strCompare = function(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
};
