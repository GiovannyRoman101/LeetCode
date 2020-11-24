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

// TODO: need to read more
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
	let result = []
	if(root === null){
		return result
	}
	let queue = []
	let children =[]
	queue.push(root)
	while(queue.length !== 0){
		let curr = queue.shift()
		if(queue.length === 0){
			result.push(curr.val)
		}
		if(curr.left !== null){
			children.push(curr.left)
		}
		if(curr.right !== null){
			children.push(curr.right)
		}

		if(queue.length === 0){
			queue = children
			children = []
		}
	}
	return result
}

let tree = new TreeNode(1)
tree.left  = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.right = new TreeNode(5)
tree.right.left = new TreeNode(4)

console.log(rightSideView(tree))