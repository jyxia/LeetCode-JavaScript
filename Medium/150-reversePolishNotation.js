/**
 * @param {string[]} tokens
 * @return {number}
 */
// seems like it is not a good solution
var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (!isNaN(token)) {
            stack.push(token);
        } else {
            var num1 = stack.pop();
            var num2 = stack.pop();
            var result = getResult(num2, num1, token);
            stack.push(result);
        }
    }

    return Math.floor(parseInt(stack[stack.length - 1]));
};

var getResult = function(num1, num2, operator) {
    var a = parseInt(num1);
    var b = parseInt(num2);
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '/') return a / b;
    if (operator === '*') return a * b;
};
