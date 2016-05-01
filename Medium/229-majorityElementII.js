/**
 * @see http://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var n1 = null;
    var n2 = null;
    var c1 = 0;
    var c2 = 0;

    for (var i = 0; i < nums.length; i++) {
        if (n1 !== null && n1 === nums[i]) {
            c1++;
        } else if (n2 !== null && n2 === nums[i]) {
            c2++;
        } else if (c1 === 0) {
            n1 = nums[i];
            c1++;
        } else if (c2 === 0) {
            n2 = nums[i];
            c2++;
        } else {
            c1--;
            c2--;
        }
    }

    c1 = 0;
    c2 = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === n1) c1++;
        if (nums[i] === n2) c2++;
    }

    var result = [];
    if (c1 > Math.floor(nums.length / 3)) result.push(n1);
    if (c2 > Math.floor(nums.length / 3)) result.push(n2);
    return result;
};
