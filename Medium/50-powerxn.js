/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    n *= -1;
    x = 1 / x;
  }
  return n % 2 === 0 ? myPow(x*x, n / 2) : x * myPow(x * x, Math.floor(n / 2));
};

// runtime error?
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x;
    }

    return n > 0 ? myPow(x, n - 1) * x : x / myPow(x, -n - 1) * x;
};
