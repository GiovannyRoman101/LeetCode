/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let currSum = 0
    let maxdepth = 0
    function dfs(root, currDepth = 0) {
        if (root === null) {
            return 0
        } else {
            if (currDepth > maxdepth) {
                maxdepth = currDepth
                currSum = 0
            }
            if (maxdepth === currDepth) {
                currSum += root.val
            }
            if (root.left !== null) {
                dfs(root.left, currDepth + 1)
            }
            if (root.right !== null) {
                dfs(root.right, currDepth + 1)
            }
        }
	}
	dfs(root)
	return currSum
}

let tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.right.right = new TreeNode(6)
tree.left.left.left = new TreeNode(7)
tree.right.right.right = new TreeNode(8)

console.log(deepestLeavesSum(tree))