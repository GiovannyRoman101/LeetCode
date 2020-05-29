/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
	this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
	function dfs(root, arr = []){
		if(root === null){
			return arr
		}else if(root !== null && root.left === null && root.right === null) {
			arr.push(root.val)
			return
		}else{
			if(root.left !== null){
				dfs(root.left,arr)
			}
			arr.push(root.val)
			if(root.right !== null){
				dfs(root.right,arr)
			}
		}
		return arr
	}
	let arr1 = dfs(root1)
	let arr2 = dfs(root2)
	return merge(arr1,arr2)
};

function merge(arr1,arr2){
	let result =[]
	if(arr1.length === 0){
		return arr2
	}else if (arr2.length === 0){
		return arr1
	}else{
		while(arr1.length > 0 && arr2.length > 0){
			if(arr1[0] > arr2[0]){
				result.push(arr2.shift())
			}else{
				result.push(arr1.shift())
			}
		}
		if(arr1.length === 0 && arr2.length !== 0){
			result.push(...arr2)
		}
		if(arr1.length !== 0 && arr2.length === 0){
			result.push(...arr1)
		}
	}
	return result
}

let root1 = null
// root1.left = new TreeNode(1)
// root1.right = new TreeNode(4)

let root2 = new TreeNode(1)
root2.left = new TreeNode(0)
root2.right = new TreeNode(3)
console.log(getAllElements(root1,root2))