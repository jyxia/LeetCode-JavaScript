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

// needs improvement, it can be shorter
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode();
    var p3 = l3;
    var addOne = false;
    var digitSum = 0;

    while (l1 || l2) {
        var l1Digit = 0;
        var l2Digit = 0;
        if (l1) l1Digit = l1.val;
        if (l2) l2Digit = l2.val;
        if (addOne) {
            digitSum = l1Digit + l2Digit + 1;
        } else {
            digitSum = l1Digit + l2Digit;
        }

        if (digitSum > 9) {
            digitSum -= 10;
            addOne = true;
        } else {
            addOne = false;
        }

        var node = new ListNode(digitSum);
        l3.next = node;
        l3 = node;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (addOne) {
        var node = new ListNode(1);
        l3.next = node;
    }

    return p3.next;
};

// a shorter and smarter Version, from LeetCode community
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode();
    var p3 = l3;
    var digitSum = 0;

    while (l1 || l2) {
        digitSum = Math.floor(digitSum / 10);

        if (l1) {
            digitSum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            digitSum += l2.val;
            l2 = l2.next
        }

        l3.next = new ListNode(digitSum % 10);
        l3 = l3.next;
    }

    if (Math.floor(digitSum / 10) === 1) {
        l3.next = new ListNode(1);
    }

    return p3.next;
};
