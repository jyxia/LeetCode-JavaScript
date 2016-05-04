/**
 * @see inline comments
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var total = 0;
    var sumRemaining = 0;
    var start = 0;

    for (var i = 0; i < gas.length; i++) {
        var remaining = gas[i] - cost[i];
        // track total remaining gas until i
        if (sumRemaining >= 0) {
            sumRemaining += remaining;
        } else {
            // if total remaing is smaller than 0, set start from i,
            start = i;
            // now the total remaining is the remaining at current i
            sumRemaining = remaining;
        }
        total += remaining;
    }

    // at the end, if total >= 0, it means there must be a circle to finish, and the
    // start is the start
    if (total >= 0) return start;
    else return -1;
};
