/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * solution: reverse the second half of the list, then merge first half and reversed second half.
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;
    var fast = head;
    var slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the list
    var middleHead = slow;
    var middleHeadPrev = null;
    while (middleHead) {
        var headNext = middleHead.next;
        middleHead.next = middleHeadPrev;
        middleHeadPrev = middleHead;
        middleHead = headNext;
    }
    // then merge first half and reversed second half.
    slow = head;
    while (slow) {
        var slowNext = slow.next;
        slow.next = middleHeadPrev;
        var headPrevNext = middleHeadPrev.next;
        middleHeadPrev.next = slowNext;
        slow = slowNext;
        middleHeadPrev = headPrevNext;
    }
};
