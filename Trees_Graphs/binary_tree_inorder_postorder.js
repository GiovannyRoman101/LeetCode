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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length ===0 || postorder.length ===0){
		return null
	}else {
		let split = postorder.pop()
		let root = new TreeNode(split)
		let inorderL = inorder.splice(0,inorder.indexOf(split))
		let inorderR = inorder.splice(inorder.indexOf(split)+1)
		let postorderL = postorder.slice(0,inorderL.length)
		let postorderR = postorder.slice(inorderL.length)
		root.left = buildTree(inorderL,postorderL)
		root.right = buildTree(inorderR, postorderR)
		return root
	}
};

let inorder = [9,3,15,20,7]
let postorder = [9,15,7,20,3]

console.log(buildTree(inorder,postorder))