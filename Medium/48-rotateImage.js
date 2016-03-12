/**
 * Key: because it is a n*n matrix, rotate from outer to inner level by level.
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var diagonalStart = 0;
    var length = matrix.length - 1;

    while (diagonalStart <= length / 2) {
        var i = diagonalStart;
        if (i + i >= length) break;
        for (var j = diagonalStart; j < length - i; j++) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[length - j][i];
            matrix[length - j][i] = matrix[length - i][length - j];
            matrix[length - i][length - j] = matrix[j][length - i];
            matrix[j][length - i] = tmp;
        }
        diagonalStart++;
    }
};
