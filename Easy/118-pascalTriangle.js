/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if (numRows === 0) return [];
    var result = [[1]];
    for (var i = 1; i < numRows; i++) {
        var preRow = result[i - 1];
        var newRow = [1];
        for (var j = 1; j < i; j++) {
          newRow[j] = preRow[j-1] + preRow[j];
        }
        newRow.push(1);
        result.push(newRow);
    }
    return result;
 };
