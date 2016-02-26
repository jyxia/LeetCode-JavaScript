/**
 * Key: Dynamic Programming.
 * Binary search tree: all left nodes are less than root, and all right node are greater than root
 * That means, given number n, if the root is i, only numbers between [0, i-1] appear on the left, while
 * only numbers between [i+1, n] appear on the right. Thus, the total combination is m*n.
 * Let count[i] be the total possible BST structure ways when the node number is i.
 * count[i] = sum(count[k], count[i- k - 1]), k starts from 0 to i-1
 * e.g. count[3] = count[0] * count[2] // when root is 1;
 *                + count[1] * count[1] // when root is 2;
 *                + count[2] * count[0] // when root is 3;
 *
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var count = [1, 1];

    for (var i = 2; i <= n; i++) {
        // give an intial value to count[i], otherwise, it will be NaN
        count[i] = 0;
        for (var j = 0; j < i; j++) {
            count[i] += count[j] * count[i - j - 1];
        }
    }

    return count[n];
};
