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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	if(preorder.length === 0 || inorder.length === 0){
		return null
	}else{
		let split = preorder.shift()
		let root = new TreeNode(split)
		let inorderL = inorder.slice(0,inorder.indexOf(split))
		let inorderR = inorder.slice(inorder.indexOf(split)+1)
		let preorderL = preorder.slice(0,inorderL.length)
		let preorderR = preorder.slice(inorderL.length)
		
		root.left = buildTree(preorderL,inorderL)
		root.right = buildTree(preorderR,inorderR)
		return root
	}
}



let preorder = ['A','B','D','E','C','F']
let inorder = ['D','B','E','A','F','C']

console.log(buildTree(preorder,inorder))