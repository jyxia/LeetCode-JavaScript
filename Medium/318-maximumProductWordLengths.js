/**
 * Key: Bit manipulation. 26 letters, from bit 0 to 25, each bit represent a letter,
 * so each word can be represented by an 'or |' operation of all bits. The two words
 * share no common letter only if the represented bits of the two words do not share
 * a common bit. (use & to solve this problem).
 *
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var bytes = [];
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        var bit = 0;
        for (var j = 0; j < words[i].length; j++) {
            bit |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
        }
        bytes[i] = bit;
    }

    for (var i = 0; i < words.length; i++) {
        for (var j = i + 1; j < words.length; j++) {
            // the operator priority '===' > '&', so we need () for the & operator
            if ((bytes[j] & bytes[i]) === 0) {
                maxLength = Math.max(maxLength, words[i].length * words[j].length);
            }
        }
    }

    return maxLength;
};
