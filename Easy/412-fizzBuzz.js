/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];

    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            res.push('FizzBuzz');
        } else if (i % 5 === 0) {
            res.push('Buzz');
        } else if (i % 3 === 0) {
            res.push('Fizz');
        } else {
            res.push('' + i);
        }
     }

     return res;
};

// try without %
var fizzBuzz = function(n) {
    var res = [];

    for (var i = 1, fizz = 0, buzz = 0; i <= n; i++) {
        fizz++;
        buzz++;
        if (fizz === 3 && buzz === 5) {
            res.push('FizzBuzz');
            fizz = 0;
            buzz = 0;
        } else if (buzz === 5) {
            res.push('Buzz');
            buzz = 0;
        } else if (fizz === 3) {
            res.push('Fizz');
            fizz = 0;
        } else {
            res.push('' + i);
        }
     }

     return res;
};
