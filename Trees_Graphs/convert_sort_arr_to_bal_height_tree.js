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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	if(nums.length <= 1){
		if(nums.length === 0){
			return null
		}
		if(nums.length ===1){
			return new TreeNode(nums.pop())
		}
	}
	let temp = Math.floor(nums.length/2)
	let node = new TreeNode(nums[temp])
	node.left = sortedArrayToBST(nums.slice(0,temp))
	node.right = sortedArrayToBST(nums.slice(temp+1))

	return node
}

let nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))