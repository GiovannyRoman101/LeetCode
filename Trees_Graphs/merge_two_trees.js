/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	if(t1 === null){
		return t2
	}else if(t2 === null){
		return t1
	}else{
		t1.val += t2.val
		t1.left = mergeTrees(t1.left,t2.left)
		t1.right = mergeTrees(t1.right,t2.right)

		return t1
	}
}

let tree1 = new TreeNode(1)
tree1.left = new TreeNode(3)
tree1.left.left = new TreeNode(5)
tree1.right = new TreeNode(2)

let tree2 = new TreeNode(2)
tree2.left = new TreeNode(1)
tree2.left.right = new TreeNode(4)
tree2.right = new TreeNode(3)
tree2.right.right = new TreeNode(7)

console.log(mergeTrees(tree1,tree2))