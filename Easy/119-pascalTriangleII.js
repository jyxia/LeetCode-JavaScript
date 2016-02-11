/**
 * calculate the element in reverse, resultRow[i] += resultRow[i-1]
 * we don't have to keep resultRow[i] if we do it from back to start.
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var resultRow = [1];
    for (var i = 1; i <= rowIndex; i++) {
        for (var j = i - 1; j > 0; j--) {
            resultRow[j] += resultRow[j - 1];
        }
        resultRow.push(1);
    }

    return resultRow;
};
