/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var words = str.split(' ');
    // the O(1) space
    var j = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            words[j] = words[i];
            j++;
        }
    }
    return words.slice(0, j).reverse().join(' ');
};
