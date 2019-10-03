//  Definition for a binary tree node.
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
	let result = []
	let queue = []
	let curr = root
	queue.push(curr)
	while(queue.length > 0){
		curr = queue.shift()
		if(curr){
			result.push(curr.val)
			queue.push(curr.left)
			queue.push(curr.right)
		}else{
			result.push(curr)
		}
	}
	while(result[result.length-1] === null){
		result.pop()
	}
	return JSON.stringify(result)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
	let arr = JSON.parse(data)
	if(arr.length === 0){
		return null
	}
	let root = new TreeNode(arr.shift())
	let queue = [root]
	while(queue.length > 0 && arr.length >0){
		let curr = queue.shift()
		let left = arr.shift()
		let right = arr.shift()
		if(left !== null && left !== undefined){
			curr.left = new TreeNode(left)
			queue.push(curr.left)
		}
		if(right !== null && right !== undefined){
			curr.right = new TreeNode(right)
			queue.push(curr.right)
		}
	}
	return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


let tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.right.left = new TreeNode(4)
tree.right.right = new TreeNode(5)
let tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
//console.log(serialize(tree1))
console.log(deserialize(serialize(tree1)))