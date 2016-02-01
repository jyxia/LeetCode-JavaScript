/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var appears = {};
    for (var i = 0; i < nums.length; i++) {
        if (appears[nums[i]]) {
            delete appears[nums[i]];
        } else {
            appears[nums[i]] = 1;
        }
    }

    var arr = [];
    for (var key in appears) {
        arr.push(parseInt(key));
    }
    return arr;
};
