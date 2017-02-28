/**
 * Key: because no limitation, as long as the price is heigher than before, the profit
 * can be added to maxProfit.
 *
 * @param {number[]} prices
 * @return {number}
 */
// This solution in fact doesn't follow the rule (you're not allowed to buy and sell at the same time),
// But mathmatically it is right.
var maxProfit = function(prices) {
    var maxProfit = 0;
    for (var i = 1; i < prices.length; i++) {
        var profit = prices[i] - prices[i - 1];
        if (profit > 0) maxProfit += profit;
    }

    return maxProfit;
};

// 2nd try, my own solution
var maxProfit = function(prices) {
    var maxProfit = 0;
    var minPrice = prices[0];
    for (var i = 0; i < prices.length;) {
        i++;
        while (prices[i] > prices[i-1]) {
            i++;
        }
        maxProfit += prices[i-1] - minPrice;
        minPrice = prices[i];
    }
    return maxProfit;
};

// test cases
// [5,4,1,2,7,8]
// [1,2,5,4,6,8]
