/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val){
	this.val = val
	this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
	let result = []
	function depthfirst(node){
		if(node !== null){
			depthfirst(node.left)
			depthfirst(node.right)
			result.push(node.val)
		}
	}
	depthfirst(root)
	return result
};

let tree = new TreeNode(1)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3)

console.log(postorderTraversal(tree))