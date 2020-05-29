//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {

	function depth(node,sum =0){
		if(!node){
			return sum
		}else {
			node.val += depth(node.right, sum)
			sum = node.val
			sum = depth(node.left,sum)
			return sum
		}
	}
	depth(root)
	return root
}

let root = new TreeNode(4)
root.left = new TreeNode(1)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)
root.right = new TreeNode(6)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

console.log(bstToGst(root))