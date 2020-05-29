/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// TODO: fix this
function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	if(p === null && q === null){
		return true
	} else if(p === null || q === null){
		return false
	}
	return p.val === q.val && isSameTree(p.left,p.left) && isSameTree(p.right,q.right)
};

let tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)

let tree1_1 = new TreeNode(1)
tree1_1.left = new TreeNode(2)
tree1_1.right = new TreeNode(3)

let tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)

let tree2_1 = new TreeNode(1)
tree2_1.right = new TreeNode(2)

let tree3 = new TreeNode(1)
tree3.left = new TreeNode(2)
tree3.right = new TreeNode(1)

let tree3_1 = new TreeNode(1)
tree3_1.left = new TreeNode(1)
tree3_1.right = new TreeNode(2)

console.log(isSameTree(tree1,tree1_1))
console.log(isSameTree(tree2,tree2_1))
console.log(isSameTree(tree3,tree3_1))