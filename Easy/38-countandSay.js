/**
* Key: find the number of occurrences of the number and place the occurrences before the number
* Be careful about the last element.
*
* @param {number} n
* @return {string}
*/
var countAndSay = function(n) {
    var input = '1';
    var result = input;
    for (var i = 1; i < n; i++) {
        result = '';
        var count = 1;
        for (var j = 0; j < input.length; j++) {
            if (j === input.length - 1) {
                result = result + count + input[j];
                break;
              }
              if (input[j] === input[j+1]) {
                  count++;
              } else {
                  result = result + count + input[j];
                  count = 1;
              }
        }
        input = result;
    }
    return result;
};
