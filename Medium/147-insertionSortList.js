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
var insertionSortList = function(head) {
    if (!head) return head;
    var dummyHead = new ListNode(null);
    dummyHead.next = head;
    var first = dummyHead;
    var second = head;

    while (second.next) {
        if (second.next.val < second.val) {
            var smallNode = second.next;
            second.next = second.next.next;
            while (first.next && first.next.val < smallNode.val) {
                first = first.next;
            }
            smallNode.next = first.next;
            first.next = smallNode;
            first = dummyHead;
        } else {
            second = second.next;
            if (!second) break;
        }

    }

    return dummyHead.next;
};
