/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	if(k < 1 || root === null){
		return null
	}else{
		let arr = []
		function dfs(node){
			if(node === null){
				return
			}else{
				if(node.left !== null){
					dfs(node.left)
				}
				arr.push(node.val)
				if(node.right  !== null){
					dfs(node.right)
				}
			}
		}
		dfs(root)
		if(arr[k-1] !== undefined){
			return arr[k-1]
		}
	}
	return null
}


let root = new TreeNode(3)
root.left = new TreeNode(1)
root.left.right = new TreeNode(2)
root.right = new TreeNode(4)

let root1 = new TreeNode(5)
root1.right = new TreeNode(6)
root1.left = new TreeNode(3)
root1.left.left = new TreeNode(2)
root1.left.left.left = new TreeNode(1)
root1.left.right = new TreeNode(4)

console.log(kthSmallest(root,1))
console.log(kthSmallest(root1,3))
