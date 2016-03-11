/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var rowStart = 0;
    var rowEnd = n - 1;
    var colStart = 0;
    var colEnd = n - 1;
    var matrix = [];
    for (var j = 0; j < n; j++) matrix.push([]);

    var i = 1;
    while (i <= n * n) {
        for (var j = colStart; j <= colEnd; j++) {
            matrix[rowStart][j] = i++;
        }
        rowStart++;

        for (var j = rowStart; j <= rowEnd; j++) {
            matrix[j][colEnd] = i++;
        }
        colEnd--;


        if (rowStart <= rowEnd) {
            for (var j = colEnd; j >= colStart; j--) {
                matrix[rowEnd][j] = i++;
            }
            rowEnd--;
        }

        if (colStart <= colEnd) {
            for (var j = rowEnd; j >= rowStart; j--) {
                matrix[j][colStart] = i++;
            }
            colStart++;
        }
    }

    return matrix;
};

// a better solution?
