/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(1) space O(n) complexity
var oddEvenList = function(head) {
    if (head === null) {
        return head;
    }
    var oddHead = head;
    var even = head.next, evenHead = head.next;
    while (true) {
        if (oddHead.next === null || evenHead.next === null) {
            oddHead.next = even;
            break;
        }
        oddHead.next = evenHead.next;
        oddHead = oddHead.next;
        evenHead.next = oddHead.next;
        evenHead = evenHead.next;
    }
    return head;
};
