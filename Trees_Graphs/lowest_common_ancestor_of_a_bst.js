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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	let curr = root
	while(curr !== null){
		if(p > curr.val && q > curr.val){
			curr = curr.right
		}else if(p < curr.val && q < curr.val ){
			curr = curr.left
		} else{
			return curr
		}
	}
	return curr
};

let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)

console.log(lowestCommonAncestor(root,2,8))