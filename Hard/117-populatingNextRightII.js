/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
// BFS, level order Traversal, set a dummy head at the beginnig of each level.
// Is it O(1) space?
var connect = function(root) {
    while (root) {
        var leftDummy = new TreeLinkNode(0);
        var currChild = leftDummy;
        while (root) {
            if (root.left) {
                currChild.next = root.left;
                currChild = currChild.next;
            }
            if (root.right) {
                currChild.next = root.right;
                currChild = currChild.next;
            }
            root = root.next;
        }
        // reset head to the left of each level.
        root = leftDummy.next;
    }
};


/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

// BFS too, but constant space
var connect = function(root) {
    // next level's head (beginnig)
    var head = root;
    // next level's last visited node
    var prev;
    // curr level's currently visiting node
    var curr;
    while (head) {
        curr = head;
        prev = null;
        head = null;
        while (curr) {
            if (curr.left) {
                if (prev) prev.next = curr.left;
                else head = curr.left;
                prev = curr.left;
            }
            if (curr.right) {
                if (prev) prev.next = curr.right;
                else head = curr.right;
                prev = curr.right;
            }
            curr = curr.next;
        }
    }
};

// doesn't work, wrong answer. e.g. {1,2,3,4,5,#,6,7,#,#,#,#,8},
// the common parent is one more level up
var connect = function(root) {
    if (!root) return;

    while (root) {
        var pNode = root;
        while (pNode) {
            var child = null;
            if (pNode.left && pNode.right) {
                pNode.left.next = pNode.right;
                child = pNode.right;
            } else {
                if (pNode.left) child = pNode.left;
                if (pNode.right) child = pNode.right;
            }
            if (child) {
                if (pNode.next) {
                    if (pNode.next.left) child.next = pNode.next.left;
                    else child.next = pNode.next.right;
                }
            }
            pNode = pNode.next;
        }

        while (root && !root.left && !root.right) {
            root = root.next;
        }
        if (!root) break;
        if (root.left) root = root.left;
        else if (root.right) root = root.right;
    }
};
