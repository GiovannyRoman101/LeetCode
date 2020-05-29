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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
	let result =[]
	if(root === null){
		return result
	}else{

		function dps(node, curr = ''){
			if(node === null){
				return
			}else if(node !== null && node.left === null && node.right === null ){
				result.push(curr + node.val)
			}else{
				dps(node.left, curr + node.val + '->')
				dps(node.right, curr + node.val + '->')
			}
		}
		dps(root)
	}
	return result
};

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(5)

console.log(binaryTreePaths(root))