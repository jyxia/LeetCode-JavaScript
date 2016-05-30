/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Solution: Two pointers. Slow moves one step a time, fast moves two steps a time.
 * Once fast meets slow, the steps fast moved is twice as the steps slow moved.
 * After they met, in order to move to the cycle start place, the steps fast needs to move
 * equals to the steps the head need to mve. Here is the reason:
 * n1 -> n2 -> n3 -> n4 -> n2 the cycle starts at n2, slow and fast meet at n4
 * assume n1 -> n4 needs a steps, n2 -> n4 needs b steps, n4-> n2 needs c steps.
 * when fast reach n4, it takes (a + b + c + b) steps, slow reached n4, it takes a + b,
 * a + b + c + b = 2 * (a + b), so a = c. => head && fast move at the same, when they meet, that's
 * the place where the cycle starts
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    var slow = head;
    var fast = head;

    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }

    return null;
};
