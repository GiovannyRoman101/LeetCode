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
 * @return {number}
 */
var sumNumbers = function(root) {
	let currSum = 0
	
	function dfs(node, num =''){
		if(node === null){
			currSum += 0
		}else {
			if(!node.left && !node.right){
				currSum += parseInt(num + node.val)
			}
			if(node.left !== null ){
				dfs(node.left, num + node.val)
			}
			if(node.right !== null){
				dfs(node.right, num + node.val)
			}
		}
	}
	dfs(root)
	return currSum
};

let tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)

let tree2 = new TreeNode(4)
tree2.left = new TreeNode(9)
tree2.left.left = new TreeNode(5)
tree2.left.right = new TreeNode(1)
tree2.right = new TreeNode(0)

console.log(sumNumbers(tree2))