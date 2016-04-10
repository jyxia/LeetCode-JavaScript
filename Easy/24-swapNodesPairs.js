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
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    var p = head;
    var pNext = head.next;
    var newHead = pNext;
    while (pNext) {
        p.next = pNext.next;
        pNext.next = p;
        var nextPairHead = p;
        p = p.next;
        if (p) {
            pNext = p.next;
            if (pNext) nextPairHead.next = pNext;
            else nextPairHead.next = p;
        } else {
            pNext = null;
        }
    }

    return newHead;
};

// re write
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    var p = head;
    var pPrev = head;
    var newHead = head.next;
    while (p) {
        var pNext = p.next;
        if (pNext) {
            pPrev.next = pNext;
            p.next = pNext.next;
            pNext.next = p;
            pPrev = p;
            p = p.next;
        } else {
            break;
        }
    }

    return newHead;
};

// recursion version, clean Code
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    var p = head;
    var pNext = p.next;
    p.next = swapPairs(pNext.next);
    pNext.next = p;
    return pNext;
};
