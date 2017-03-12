/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[num%10];
};


// this is awkward because the order of object keys is not reserved
var intToRoman = function(num) {
    var map = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    var romanStr = '';

    Object.keys(map).sort(function(a, b) {
        return b - a;
    }).forEach(function (val) {
        while (num >= val) {
            num -= val;
            romanStr += map[val];
        }
    });

    return romanStr;
};

// although you can use two arrays to do it.
var intToRoman = function(num) {
    var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var strs = ['M', 'CM', 'D', 'CD', 'C','XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanStr = '';

    vals.forEach(function (val, index) {
        while (num >= val) {
            num -= val;
            romanStr += strs[index];
        }
    });

    return romanStr;
};
