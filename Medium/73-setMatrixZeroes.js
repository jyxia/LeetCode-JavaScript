/**
 * Key: use first row to store the zero state for each column exclude the first col,
 * use first col to store the zero state for each row exclude the first row
 * use two variable to mark whether the first row and the first column has zeros.
 * set the matrix with zeros with the states.
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var firstRowZero = false;
    var firstColZero = false;
    var rows = matrix.length;
    var cols = matrix[0].length;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) firstRowZero = true;
                if (j === 0) firstColZero = true;
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRowZero) {
        for (var i = 0; i < cols; i++) {
            matrix[0][i] = 0;
        }
    }

    if (firstColZero) {
        for (var i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};
