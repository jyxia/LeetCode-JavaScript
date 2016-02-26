/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Key: two pointers, slow move one step one time, fast moves two steps one time
 * if there is a cycle fast will meet slow
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    var fast = head;
    var slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
        if (slow === fast) return true;
    }

    return false;
};
