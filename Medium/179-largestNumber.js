/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        var ab = a + '' + b;
        var ba = b + '' + a;
        if (ab < ba) return 1;
        else if (ab > ba) return -1;
        return 0;
    });
    if (nums[0] === 0) return '0';
    return nums.join('');
};

// this is a wrong solution e.g. [121,12] '12' < '121', then it doesn't work.
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        if (a.toString() < b.toString()) return 1;
        else if (a.toString() > b.toString()) return -1;
        else return 0;
    });
    if (nums[0] === 0) return '0';
    return nums.join('');
};
