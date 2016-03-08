/**
 * Dynamic programming: S[i][j] = min(S[i - 1][j], S[i][j - 1]) + grid[i][j]
 * Iniatially, S[i][j] is the sum of first row and first column elments.
 * Be careful, how JavaScript handles two demensional array, otherwise, you can get
 * 'undefined' error.
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var sum = [];
    sum[0] = [grid[0][0]];
    for (var i = 1; i < m; i++) {
        sum[i] = [sum[i - 1][0] + grid[i][0]];
    }

    for (var j = 1; j < n; j++) {
        sum[0][j] = sum[0][j - 1] + grid[0][j];
    }

    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + grid[i][j];
        }
    }

    return sum[m - 1][n - 1];
};
