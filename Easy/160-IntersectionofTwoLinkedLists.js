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

// 2nd try without knowing the length
var getIntersectionNode = function(headA, headB) {
    var intersection = null;
    var pa = headA;
    var pb = headB;

    if (!pa || !pb) {
        return intersection;
    }

    while (pa || pb) {
        if (pa && pb && pa.val === pb.val) {
            intersection = pa;
        }

        // this can be replace by pa === pb
        while (pa && pb && pa.val === pb.val) {
            pa = pa.next;
            pb = pb.next;
        }

        if (pa === null && pb === null) {
            break;
        } else if (pa === null) {
            pa = headB;
        } else if (pb === null) {
            pb = headA;
        } else {
            pa = pa.next;
            pb = pb.next;
        }
    }

    return intersection;
};

// more concise version,  compared to version 2
var getIntersectionNode = function(headA, headB) {
    var pa = headA;
    var pb = headB;

    if (!pa || !pb) {
        return null;
    }

    while (pa && pb && pa !== pb) {
        pa = pa.next;
        pb = pb.next;
        if (pa === pb) {
           return pa;
        }

        if (!pa) {
            pa = headB;
        }

        if (!pb) {
            pb = headA;
        }
    }

    return pa;
};
