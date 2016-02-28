/**
 * key: just use two variables, 'minPrice' to track the loweset prices,
 * 'maxProfit' to track max profit, scan the array once.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;

    var minPrice = prices[0];
    var maxProfit = 0;

    for (var i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
};
