/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
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
    if (!l2) l3.next = l1

    return l3Head.next;
};
