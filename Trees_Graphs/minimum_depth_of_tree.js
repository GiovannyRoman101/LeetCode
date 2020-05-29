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
 * @return {number}
 */
var minDepth = function(root) {
	let depth = 0
	if(root === null){
		return depth
	} else{
		let min = Infinity
		function travel(node, currDepth){
			if(node ===null){
				return
			} else if(node !== null && node.left === null && node.right === null){
				currDepth ++
				if(currDepth < min){
					min = currDepth
					depth = min
				}
			} else{
				travel(node.left, currDepth+1)
				travel(node.right, currDepth+1)
			}
		}
	}
	travel(root,0)
	return depth
}


let tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)
let tree2 = new TreeNode(1)
tree2.right = new TreeNode(2)
console.log(minDepth(tree2))