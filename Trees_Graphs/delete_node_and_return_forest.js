/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 //TODO: search and return array
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
	let forest =[]

	function delNodesRec(root, to_delete){
		if(root === null){
			return root
		}else if(to_delete.length === 0){
			return root
		}
		root.left = delNodesRec(root.left, to_delete)
		root.right = delNodesRec(root.right, to_delete)

		let delIndex = to_delete.indexOf(root.val)

		if(delIndex !== -1){
			to_delete.splice(delIndex, 1)
			let forestInd = forest.findIndex(node =>{
				return node.val === root.val
			})

			if(forestInd !== -1){
				forest.splice(forestInd, 1)
			}
			if(root.left){
				forest.push(root.left)
			}
			if(root.right){
				forest.push(root.right)
			}
			return null
		}else{
			return root
		}
	}
	if(to_delete.indexOf(root.val) === -1){
		forest.push(root)
	}
	delNodesRec(root,to_delete)
	return forest
}



let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

console.log(delNodes(root,[3,5]))