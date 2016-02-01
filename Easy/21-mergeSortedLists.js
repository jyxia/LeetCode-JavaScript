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
    if (l1 === null && l2 === null) {
        return null;
    }
    while (true) {
        if (l1 === null && l2 !== null) {
            l3.val = l2.val;
            l2 = l2.next;
        } else if (l2 === null && l1 !== null) {
            l3.val = l1.val;
            l1 = l1.next;
        } else if (l1.val <= l2.val ) {
            l3.val = l1.val;
            l1 = l1.next;
        } else {
            l3.val = l2.val;
            l2 = l2.next;
        }
        if (l1 === null && l2 === null) {
            break;
        }
        l3.next = new ListNode();
        l3 = l3.next;
    }

    return l3Head;
};

// discard first dummy node in the new list which contains the merged result.
var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode();
    var l3Head = l3;
    while (true) {
        if (l1 === null && l2 === null) {
            break;
        }
        if (l1 === null && l2 !== null) {
            l3.next = l2;
            break;
        }
        if (l2 === null && l1 !== null) {
            l3.next = l1;
            break;
        }
        if (l1.val <= l2.val ) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }

    return l3Head.next;
};
