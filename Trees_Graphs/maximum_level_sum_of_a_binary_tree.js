/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
	let sums = []
	if(root === null){
		return 0
	}else{
		let queue = []
		queue.push(root)
		let currLevel = 0
		let children = []
		while(queue.length !== 0){
			let curr = queue.shift()
			currLevel += curr.val
			if(curr.left !== null){
				children.push(curr.left)
			}
			if(curr.right !== null){
				children.push(curr.right)
			}
			if(queue.length === 0){
				sums.push(currLevel)
				currLevel = 0
				queue = children
				children = []
			}
		}
	}
	let maxLevel = 0
	for(let i = 0; i < sums.length; i++){
		if(sums[i] >= sums[maxLevel] ){
			maxLevel = i
		}
	}
	return maxLevel +1
};