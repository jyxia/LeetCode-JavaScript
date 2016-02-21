/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var extra = 0;
    var result = [];
    var aLength = a.length;
    var bLength = b.length;
    var i = 0;

    // add '0' before the shorted binary string
    if (aLength <= bLength) {
        i = bLength - 1;
        for (var j = 0; j < bLength - aLength; j++) {
            a = '0' + a;
        }
    } else {
        i = aLength - 1;
        for (var j = 0; j < aLength - bLength; j++) {
            b = '0' + b;
        }
    }

    // extra is 1 if there is a carry
    while (i >= 0) {
        if (extra === 0) {
            result[i] = a[i] ^ b[i];
            if (a[i] === '1' && b[i] === '1') {
                extra = 1;
            }
        } else if (extra === 1) {
            if (a[i] === '0' && b[i] === '0') {
                extra = 0;
                result[i] = '1';
            } else {
                result[i] = a[i] & b[i];
            }
        }
        i--;
    }
    if (extra === 1) result.unshift('1');

    return result.join('');
};
