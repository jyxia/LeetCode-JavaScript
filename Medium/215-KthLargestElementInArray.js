/**
 * Key:
 * Quick select algorithm, choose last element of the array as the pivot.
 * Move all smaller elements than the pivot to the left of the pivot,
 * move all bigger elements than the pivot to the right of the pivot,
 * repeat this process until the pivot is K
 * O(N)? worst O(N^2)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        var pivot = partition(nums, start, end);
        if (k === pivot) {
            return nums[pivot];
        }
        else if (k < pivot) {
            end = pivot - 1;
        } else {
            start = pivot + 1;
        }
    }
};

var partition = function(nums, start, end) {
    var left = start;
    var right = end;
    var pivot = end;
    while (true) {
        while (left < right && nums[left] < nums[pivot]) {
            left++;
        }
        while (left < right && nums[right] >= nums[pivot]) {
            right--;
        }
        if (left === right) break;
        swap(nums, left, right);
    }
    swap(nums, right, end);
    return right;
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};
