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
	let result =[]
	if(root === null){
		return result
	}
	result.push(root.val)
	let curr = root
	while(curr !== null){
		if(curr.right !== null){
			result.push(curr.right.val)
			curr = curr.right
		}else if(curr.left !== null){
			result.push(curr.left.val)
			curr = curr.left
		}
		else{
			curr = null
		}
		
	}
	return result
};

let tree = new TreeNode(1)
tree.left  = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.right = new TreeNode(5)
tree.right.right = new TreeNode(4)

console.log(rightSideView(tree))