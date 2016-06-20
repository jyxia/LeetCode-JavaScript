/**
 * Solution: only current element's top left element is 1, the square numbers is possible to increase 1.
 * If the element's left, top is 1, yes, then the square numbers adds 1. Otherwise,  set the square number of
 * current element to Min(topleft, left, top) + 1.
 * If current element's top left element is 0, just simply set current element's square number to be 0;
 * The formular is dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1;
 * or dp[i][j] = 0, if matrix[i-1][j-1] == 0
 *
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var rows = matrix.length;
    if (rows === 0) return 0;
    var cols = matrix[0].length;
    var squares = [[0]]; // the two dimensional array is not fully initialized yet.
    var result = 0;

    for (var i = 1; i <= rows; i++) {
        squares.push([0]);
        for (var j = 1; j <= cols; j++) {
            squares[0][j] = 0;
            if (matrix[i - 1][j - 1] === '1') {
                squares[i][j] = Math.min(squares[i-1][j], squares[i-1][j-1], squares[i][j-1]) + 1;
                result = Math.max(result, squares[i][j]);
            } else {
                // In JavaScript, assign 0 to an undefined element in the array.
                squares[i][j] = 0;
            }
        }
    }
    return result * result;
};

// test cases
// ["1"]
// ["1010","1011","1111","1001"]
