/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// too slow?
var merge = function(nums1, m, nums2, n) {
    var nums3 = [];
    for (var i = 0; i < m; i++) {
        nums3[i] = nums1[i];
    }
    for (var i = m; i < m + n; i++) {
        nums3[i] = nums2[i - m];
    }
    var head1 = 0, head2 = m;
    for (var i = 0; i < m + n; i++) {
        if (head1 >= m) nums1[i] = nums3[head2++];
        else if (head2 >= m + n) nums1[i] = nums3[head1++];
        else if (nums3[head1] <= nums3[head2]) nums1[i] = nums3[head1++];
        else nums1[i] = nums3[head2++];
    }
};

// without an auxiliary array, but still too slow... why?
var merge = function(nums1, m, nums2, n) {
    var tail1 = m - 1;
    var tail2 = n - 1;
    for (var i = m + n -1; i >= 0; i--) {
        if (tail1 < 0) {
            nums1[i] = nums2[tail2--];
        } else if (tail2 < 0) {
            nums1[i] = nums1[tail1--];
        } else if (nums1[tail1] <= nums2[tail2]) {
            nums1[i] = nums2[tail2--];
        } else if ((nums2[tail2] < nums1[tail1])) {
            nums1[i] = nums1[tail1--];
        }
    }
};
