/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num > 9) {
    num = getTotal(num);
  }
  return num;
};

var getTotal = function(num) {
  var total = 0, dig = 0;
  while (num > 9) {
    dig = num % 10;
    total += dig;
    num = Math.floor(num / 10);
  }
  return total + num;
};
