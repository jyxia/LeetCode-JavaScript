/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num > 1) {
        while (num % 4 === 0) {
            num = Math.floor(num / 4);
        }
    }
    return num === 1;
};

var isPowerOfFour = function(num) {
    if (num > 1) {
        if ((num & (num - 1)) === 0) {
            if ((num - 1) % 3 === 0) {
                return true;
            }
        }
    }
    return num === 1;
};

// the '1' bit only appears at odd bit, so if any every 3 bits (=5) has 1, it is
// a number of power of 4
var isPowerOfFour = function(num) {
    if (num > 1) {
        if ((num & (num - 1)) === 0) {
            if ((num & 0x55555555) !== 0) {
                return true;
            }
        }
    }
    return num === 1;
};
