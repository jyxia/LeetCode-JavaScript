/**
 * solution: search boarders first, if there is an "O", search this O's neighbors,
 * if there is a connected "O", keeping searching.
 * The "O" can be captured only if it is connected to the "O" exsiting on the boarders
 * In other words, it can get out the board.
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    var xIndex = [];
    var yIndex = [];
    var rows = board.length;
    if (rows === 0) return;
    var cols = board[0].length;

    for (var i = 0; i < rows; i++) {
        if (board[i][0] === 'O') {
            xIndex.push(i);
            yIndex.push(0);
        }

        if (board[i][cols - 1] === 'O') {
            xIndex.push(i);
            yIndex.push(cols - 1);
        }
    }

    for (i = 0; i < cols; i++) {
        if (board[0][i] === 'O') {
            xIndex.push(0);
            yIndex.push(i);
        }

        if (board[rows - 1][i] === 'O') {
            xIndex.push(rows - 1);
            yIndex.push(i);
        }
    }
    var k = 0;
    while (k < xIndex.length) {
        var x = xIndex[k];
        var y = yIndex[k];
        board[x][y] = 'Y';
        if (x > 1 && board[x - 1][y] === 'O') {
            xIndex.push(x - 1);
            yIndex.push(y);
        }
        if (x < rows - 2 && board[x + 1][y] === 'O') {
            xIndex.push(x + 1);
            yIndex.push(y);
        }
        if (y > 1 && board[x][y - 1] === 'O') {
            xIndex.push(x);
            yIndex.push(y - 1);
        }
        if (y < cols - 2 && board[x][y + 1] === 'O') {
            xIndex.push(x);
            yIndex.push(y + 1);
        }
        k++;
    }

    for (var j = 0; j < rows; j++) {
        for (var h = 0; h < cols; h++) {
            if (board[j][h] === 'O') {
                board[j][h] = 'X';
            }
            if (board[j][h] === 'Y') {
                board[j][h] = 'O';
            }
        }

    }
};

// test cases
// ["OOO","OOO","OOO"]
// ["XXXX","XOOX","XXOX", "XOXX"]
// ["XOX","XOX","XOX"]
