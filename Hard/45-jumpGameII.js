/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var jumpTo = 0;
    var lastReach = 0;
    var jumps = 0;
    for (var i = 0; i < nums.length && i <= jumpTo; i++) {
        //when last jump can not reach i, increase the step by 1
        if (i > lastReach) {
            jumps++;
            lastReach = jumpTo;
        }
        jumpTo = Math.max(jumpTo, nums[i] + i);
    }

    return lastReach >= nums.length - 1 ? jumps : 0;
};

// second solution, easy understanding. Nice solution. BFS
// [2,3,1,1,4] 2 -> 3, 1 -> 4
var jump = function(nums) {
    var curr = 0;
    var next = 0;
    var jumps = 0;
    var length = nums.length;
    for (var i = 0; i < length;) {
        if (curr >= length - 1) break;
        // find the next (max jump to) of every element before (including) current element
        // once the next is chosen, it is one step jump.
        while (i <= curr) {
            next = Math.max(i + nums[i], next);
            i++;
        }

        jumps++;
        curr = next;
    }

    return jumps;
};
