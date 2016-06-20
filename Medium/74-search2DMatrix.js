/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var low = 0;
    var rows = matrix.length;
    var cols = matrix[0].length;
    var high = rows * cols - 1;

    while (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        var midNumber = findElementByIndex(matrix, mid, rows, cols);
        if (target < midNumber) high = mid - 1;
        else if (target > midNumber) low = mid + 1;
        else return true;
    }

    return false;
};

var findElementByIndex = function(matrix, index, m, n) {
    var row = Math.floor(index / n);
    var col = index - n * row;
    return matrix[row][col];
};

// second try
var searchMatrix = function(matrix, target) {
    var low = 0;
    var rows = matrix.length;
    var cols = matrix[0].length;
    var high = rows * cols - 1;
    while (low <= high) {
        var mid = low + Math.floor((high - low) / 2);
        var midElement = findElementByIndex(matrix, mid, cols);
        if (midElement === target) {
            return true;
        } else if (midElement > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};

// only need n (columns).
var findElementByIndex = function(matrix, index, n) {
    var row = Math.floor(index / n);
    var col = Math.floor(index % n);
    return matrix[row][col];
};
