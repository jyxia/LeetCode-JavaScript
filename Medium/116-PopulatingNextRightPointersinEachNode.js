/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * Key: if a node is a parent's left child, then this node's next is its parent's right child node.
 * if a node is a parent node's right child, then this node's next is its parent's next node's left node.
 * (the parent node should have next child). The trick part is how to write code.
 *
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) return;
    while (root.left) {
        // track every level, starts from the left
        var levelP = root;
        while (levelP) {
            levelP.left.next = levelP.right;
            if (levelP.next) levelP.right.next = levelP.next.left;
            levelP = levelP.next;
        }
        root = root.left;
    }
};

// second try, slow, but easy understanding
// the space is not constant
var connect = function(root) {
    if (!root) return;
    root.next = null;
    var queue = [root];
    while (queue.length > 0) {
        var node = queue.shift();
        if (node.left) {
            node.left.next = node.right;
            queue.push(node.left);
        }
        if (node.right) {
            if (node.next) {
                node.right.next = node.next.left;
            }
            queue.push(node.right);
        }
    }
};
