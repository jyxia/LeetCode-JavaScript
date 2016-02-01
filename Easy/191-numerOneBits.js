/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var counts = 0;
  while (n > 0) {
    if (n & 1 === 1) {
      counts++;
    }
    // be careful to use >>> instead of >>
    // in JavaScript, >> is used for signed numbers, >>> is used for unsigned numbers
    n >>>= 1;
  }
  return counts;
};
