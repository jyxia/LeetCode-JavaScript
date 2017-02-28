/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * sort, then merge. In fact, this method use O(logN) space for recursive function calls.
 * needs to be improved.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    var fast = head;
    var slow = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    fast = slow.next;
    slow.next = null;
    var secondHalf = sortList(fast);
    var firstHalf = sortList(head);
    return merge(firstHalf, secondHalf);
};

var merge = function(l1, l2) {
    var l3 = new ListNode();
    var l3Head = l3;
    while (l1 && l2) {
        if (l1.val <= l2.val ) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }
    if (!l1) l3.next = l2;
    if (!l2) l3.next = l1;

    return l3Head.next;
};
