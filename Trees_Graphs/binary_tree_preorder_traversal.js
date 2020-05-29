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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = []
    if (!root) {
        return result
    } else {
        let curr = []
        curr.push(root)
        while (curr.length !== 0) {
            let node = curr.pop()
			result.push(node.val)
			if (node.right !== null) {
                curr.push(node.right)
            }
            if (node.left !== null) {
                curr.push(node.left)
            }
            
        }
    }
    return result
}

let root = new TreeNode(1)
root.left = new TreeNode(4)
root.right = new TreeNode(3)
root.left.left = new TreeNode(2)

console.log(preorderTraversal(root))