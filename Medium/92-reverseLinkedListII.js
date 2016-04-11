/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummyHead = new ListNode(null);
    dummyHead.next = head;
    var pre = dummyHead;

    for (var i = 1 ; i < m; i++) {
        pre = pre.next;
    }

    var curr = pre.next;
    var newHead = pre;
    for (var i = 0; i <= n - m; i++) {
        var currNext = curr.next;
        curr.next = pre;
        pre = curr;
        curr = currNext;
    }
    // reset the head and tail pointers
    newHead.next.next = curr;
    newHead.next = pre;

    return dummyHead.next;
};
