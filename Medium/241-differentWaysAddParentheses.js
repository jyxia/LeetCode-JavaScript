/**
 * @param {string} input
 * @return {number[]}
 */
// slow, we can use dp to cache some results
var diffWaysToCompute = function(input) {
    var results = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] === '-' || input[i] === '+' || input[i] === '*') {
            console.log(input);
            var inputLeft = diffWaysToCompute(input.substring(0, i));
            var inputRight = diffWaysToCompute(input.substring(i + 1));
            for (var j = 0; j < inputLeft.length; j++) {
                for (var k = 0; k < inputRight.length; k++) {
                    var result ;
                    if (input[i] === '-') {
                        result = parseInt(inputLeft[j]) - parseInt(inputRight[k]);
                    } else if (input[i] === '+') {
                        result = parseInt(inputLeft[j]) + parseInt(inputRight[k]);
                    } else if (input[i] === '*') {
                        result = parseInt(inputLeft[j]) * parseInt(inputRight[k]);
                    }
                    results.push(result);
                }
            }
        }
    }

    if (results.length === 0) results.push(parseInt(input));

    return results;
};
