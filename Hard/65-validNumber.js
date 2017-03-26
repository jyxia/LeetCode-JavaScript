/**
 * @param {string} s
 * @return {boolean}
 */
// 1. if it is a '.', there was no . or e
// 2. if it is a 'e', there was no e and the e is right after a number
// 3. if it is a '+' or '-', it only can be at the begining or after e.
var isNumber = function(s) {
    var numberSeen = false,
        dotSeen = false,
        eSeen = false,
        afterE = true,
        i;
    s = s.trim()

    for (i = 0; i < s.length; i++) {
        if (parseInt(s[i]) >= 0 && parseInt(s[i]) <= 9) {
            numberSeen = true;
            afterE = true;
        } else if (s[i] === '.') {
            if (dotSeen || eSeen) {
                return false;
            }
            dotSeen = true;
        } else if (s[i] === 'e') {
            if (eSeen || !numberSeen) {
                return false;
            }
            eSeen = true;
            afterE = false;
        } else if (s[i] === '+' || s[i] === '-') {
            if (i !== 0 || !eSeen) {
                return false
            }
        } else {
            return false;
        }
    }

    return numberSeen && afterE;
};
