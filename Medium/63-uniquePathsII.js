/**
 * Key: dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * In this question, if obstacleGrid[i][j] === 1, set dp[i][j] = 0
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var path = [[]];
    obstacleGrid[0][0] === 0 ? path[0][0] = 1 : path[0][0] = 0;
    for (var i = 1; i < obstacleGrid.length; i++) {
        // In JavaScript, initialize an new empty array for row i, so that you can have a
        // two-demension array
        path[i] = [];
        (path[i - 1][0] === 1 && obstacleGrid[i][0] === 0) ? path[i][0] = 1 : path[i][0] = 0;
    }
    for (var j = 1; j < obstacleGrid[0].length; j++) {
        (path[0][j - 1] === 1 && obstacleGrid[0][j] === 0) ? path[0][j] = 1 : path[0][j] = 0;
    }

    for (var i = 1; i < obstacleGrid.length; i++) {
        for (var j = 1; j < obstacleGrid[i].length; j++) {
           if (obstacleGrid[i][j] === 0) {
               path[i][j] = path[i - 1][j] + path[i][j - 1];
           } else {
               path[i][j] = 0;
           }
        }
    }
    return path[path.length - 1][path[0].length - 1];
};
