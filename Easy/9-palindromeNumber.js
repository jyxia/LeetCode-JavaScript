/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var revX = 0;
    var y = x;
    while (x > 0) {
        revX = revX * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return y === revX;
};

// 2nd solution
// It only needs to examine half of the number
// just be careful if the number is has factor 10
// also a good solution in case overflow happens
var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
    var revX = 0;
    while (x > revX) {
        revX = revX * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return (x === revX) || (x === Math.floor(revX / 10));
};
