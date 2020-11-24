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
 * @return {boolean}
 */
var isValidBST = function(root) {
	let res = []

	function dfs(node){
		if(node === null){
			return
		}else{
			if(node.left !== null){
				dfs(node.left)
			}
			res.push(node.val)
			if(node.right !== null){
				dfs(node.right)
			}
		}
	}
	dfs(root)
	for(let i =1; i < res.length; i++){
		if(res[i-1] >= res[i]){
			return false
		}
	}
	return true
}

let root = new TreeNode(1)
// root.left = new TreeNode(1)
root.right = new TreeNode(1)
// root.right.left = new TreeNode(3)
// root.right.right = new TreeNode(6)
console.log(isValidBST(root))