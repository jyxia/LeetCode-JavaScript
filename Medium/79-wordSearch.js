/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (existHelper(board, word, i, j, 0)) return true;
        }
    }

    return false;
};

// if the word[k] existing in board, keep searching up, down, left, right 
var existHelper = function(board, word, i, j, k) {
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return false;
    if (board[i][j] === word[k]) {
        var tmp = board[i][j];
        board[i][j] = '#';
        if (existHelper(board, word, i + 1, j, k + 1) ||
            existHelper(board, word, i - 1, j, k + 1) ||
            existHelper(board, word, i, j + 1, k + 1) ||
            existHelper(board, word, i, j - 1, k + 1)) {
              return true;
        }
        board[i][j] = tmp;
    }
};
