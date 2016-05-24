/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * Solution: Sort intervals first, then merge. See inline comments.
 *
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 0) return intervals;
    intervals.sort(function(a, b) {
       return a.start - b.start;
    });
    var result = [];
    var pre = intervals[0];
    for (var i = 1, length = intervals.length; i < length; i++) {
        if (intervals[i].start > pre.end) {
            result.push(pre);
            // this pre inteval may not be merged, this is why there is a push after this loop
            pre = intervals[i];
        } else {
            pre = new Interval(pre.start, Math.max(pre.end, intervals[i].end));
            // don't push to result yet, because this pre can be merged next round.
        }
    }

    result.push(pre);
    return result;
};
