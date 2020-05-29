/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let prev = null

    let recursive = root => {
        if (!root) {
            return root
        } else {
            recursive(root.right)
            recursive(root.left)
            root.right = prev
            root.left = null
			prev = root
        }
    }
	recursive(root)
	return prev
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right = new TreeNode(5)
root.right.right = new TreeNode(6)

console.log(flatten(root))
