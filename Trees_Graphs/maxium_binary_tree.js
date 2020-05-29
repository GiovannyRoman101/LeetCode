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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0){
		return null
	}else if(nums.length === 1){
		return new TreeNode(nums[0])
	}else{
		let max = 0
		for(let i = 0 ; i < nums.length; i++){
			if(nums[max] < nums[i]){
				max = i
			}
		}
		let root = new TreeNode(nums[max])
		root.left = constructMaximumBinaryTree(nums.slice(0,max))
		root.right = constructMaximumBinaryTree(nums.slice(max+1))
		return root
	}
};

let arr = [3,2,1,6,0,5]

console.log(constructMaximumBinaryTree(arr))
