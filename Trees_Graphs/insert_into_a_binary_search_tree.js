/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
	let node = new TreeNode(val)
	if(root === null){
		return node
	}
	dfs(root,node)
	return root
}

function dfs(root, node){
	if(root === null){
		root = node
	}else{
		if(root.val < node.val){
			if(root.right !== null){
				dfs(root.right,node)
			}else{
				root.right = node
			}
		}
		if(root.val > node.val){
			if(root.left !== null){
				dfs(root.left, node)
			}else{
				root.left = node
			}
		}
	}
}

let root = new TreeNode(4)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right = new TreeNode(7)

console.log(insertIntoBST(null,5))