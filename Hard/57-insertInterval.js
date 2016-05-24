/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * Solutions: 3 scenarios,
 * 1) [[1,2], [5,6]] insert [3,4], push [1,2] (first if),
 * 2) continue step 1, push [3,4] (2nd if), push[5,6] (2nd if)
 * 3) another example, [[1,3], [3,5]] insert [2,4]
 *
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var result = [];
    for (var i = 0, length = intervals.length; i < length; i++) {
        if (intervals[i].end < newInterval.start) {
            result.push(intervals[i]);
        } else if (intervals[i].start > newInterval.end) {
            result.push(newInterval);
            newInterval = intervals[i];
        } else {
            // this case is (intervals[i].end >= newInterval.start || intervals[i].start <= newInterval.end)
            newInterval.start = Math.min(intervals[i].start, newInterval.start);
            newInterval.end = Math.max(intervals[i].end, newInterval.end);
        }
    }

    result.push(newInterval);
    return result;
};
