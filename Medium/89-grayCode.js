/**
 * Key
 * n = 0, return [0]
 * n = 1, return [0, 1]
 * n = 2, return [00, 01, 11, 10]
 * we can see that first n elements (first half) is from the results (n - 1),
 * in the second half of results array, first thing is to flip the highest bit to 1
 * the rest numbers of part two is symmetric of first half part after first bit.
 *
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var results = [0];
    for (var i = 0; i < n; i++) {
        var size = results.length;
        for (var j = size - 1; j >= 0; j--) {
            var val = results[j];
            results.push(val | (1 << i));
        }
    }

    return results;
};
