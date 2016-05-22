/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head || !head.next) return head;
    var first = new ListNode(null);
    first.next = head;
    var newHead = first;
    while (first.next.val < x) {
        first = first.next;
        if (!first.next) return newHead.next;
    }
    var second = first;
    while (second.next) {
        while (second.next.val >= x) {
            second = second.next;
            if (!second.next) return newHead.next;
        }
        var firstNext = first.next;
        var secondNext = second.next;
        first.next = second.next;
        second.next = secondNext.next;
        secondNext.next = firstNext;
        first = first.next;
    }

    return newHead.next;
};

// use two extra list, 1st list tracks node less than x,
// 2nd list tracks nodes >= x
// clean and concise
var partition = function(head, x) {
    var dummy1 = new ListNode(null);
    var dummy2 = new ListNode(null);
    var curr1 = dummy1;
    var curr2 = dummy2;

    while (head) {
        if (head.val < x) {
            curr1.next = head;
            curr1 = curr1.next;
        } else {
            curr2.next = head;
            curr2 = curr2.next;
        }

        head = head.next;
    }

    curr1.next = dummy2.next;
    curr2.next = null;
    return dummy1.next;
};
