/**
 * key: num1[i] * num2[j] will be placed at indices result[i + j, i + j + 1]
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    var result = [];
    for (var i = 0; i < num1.length + num2.length; i++) {
        result.push(0);
    }

    for (var i = num1.length - 1; i >= 0 ; i--) {
        for (var j = num2.length - 1; j >= 0 ; j--) {
            var digitResult = parseInt(num1[i]) * parseInt(num2[j]);
            digitResult += result[i+j+1];
            result[i+j+1] = digitResult % 10;
            result[i+j] += Math.floor(digitResult / 10);
        }
    }
    if (result[0] === 0) result.shift();

    return result.join('');
};
