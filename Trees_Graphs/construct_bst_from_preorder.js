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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
	let root = null
	if(preorder === null || preorder.length ===0){
		return root
	}else{
		root = new TreeNode(preorder[0])
		for(let i = 1; i < preorder.length;i++){

			dfs(root, preorder[i])
		}
	}
	
	return root
};

function dfs(node, val){
	if(node === null){
		return
	}else{
		let curr = node
		while(curr !== null){
			if(curr.val === val){
				return
			}else if(curr.val < val){
				if(curr.right === null){
					curr.right = new TreeNode(val)
					return
				}else{
					curr = curr.right
				}
			}else{
				if(curr.left === null){
					curr.left = new TreeNode(val)
					return
				}else{
					curr = curr.left
				}
			}
		}
	}
}

let arr = [8,5,1,7,10,12]

console.log(bstFromPreorder(arr))