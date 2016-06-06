/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Key: just use inorderTraversal to traverse the tree. Inorder traversal
 * travels the node in a ascending order because it is a BST...
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stack = [];
    var node = root;

    while (node || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            k--;
            if (k === 0) return node.val;
            node = node.right;
        }
    }
};

// second try
var kthSmallest = function(root, k) {
    var stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        k--;
        if (k === 0) return root.val;
        root = root.right;
    }

    return 0;
};
