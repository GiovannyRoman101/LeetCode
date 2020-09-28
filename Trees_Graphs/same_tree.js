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
	}else if(p.val !== q.val){
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

let tree4_1 = new TreeNode(0)
tree4_1.left = new TreeNode(-5)

let tree4_2 = new TreeNode(0)
tree4_2.left = new TreeNode(-8)

console.log(isSameTree(tree4_1,tree4_2))
console.log(isSameTree(tree2,tree2_1))
console.log(isSameTree(tree3,tree3_1))