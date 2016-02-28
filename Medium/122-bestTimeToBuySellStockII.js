/**
 * Key: because no limitation, as long as the price is heigher than before, the profit
 * can be added to maxProfit.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    for (var i = 1; i < prices.length; i++) {
        var profit = prices[i] - prices[i - 1];
        if (profit > 0) maxProfit += profit;
    }

    return maxProfit;
};
