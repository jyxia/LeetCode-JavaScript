/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * because there is an intersection btw two linkedlists, first align the head of longer list with
 * the shorter one's head. Then just keep moving the heads of both linkedlists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var lenA = getLength(headA);
    var lenB = getLength(headB);

    while(lenA < lenB) {
        headB = headB.next;
        lenB--;
    }

    while(lenB < lenA) {
        headA = headA.next;
        lenA--;
    }

    while(headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;

};

var getLength = function(listHead) {
    var length = 0;
    while (listHead) {
        length++;
        listHead = listHead.next;
    }
    return length;
};
