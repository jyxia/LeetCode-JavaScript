/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var sells = [0];
    var buys = [-prices[0]];

    for (var i = 1; i < prices.length; i++) {
        var delta = prices[i] - prices[i - 1];
        sells[i] = Math.max(buys[i - 1] + prices[i], sells[i - 1] + delta);
        if (i > 1) {
            buys[i] = Math.max(sells[i - 2] - prices[i], buys[i - 1] - delta);
        } else {
            buys[i] = Math.max(-prices[i], buys[i - 1] - delta);
        }
    }

    return Math.max.apply(null, sells);
};
