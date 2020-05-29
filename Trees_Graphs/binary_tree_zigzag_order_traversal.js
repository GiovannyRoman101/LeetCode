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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let flag = true
    let result = []
	let queue = []
	
	
    if (!root) {
		return result
    }else{
		queue.push(root)
		while(queue.length !== 0){
			let currlevel =[]
			let children =[]
			while(queue.length !== 0){
				let curr = queue.shift()
				if(flag){
					currlevel.push(curr.val)
				}else{
					currlevel.unshift(curr.val)
				}
				if(curr.left !== null){
					children.push(curr.left)
				}
				if(curr.right !== null){
					children.push(curr.right)
				}
			}
			result.push(currlevel)
			flag = !flag
			queue = children
		}
	}
	return result
}

let tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(zigzagLevelOrder(tree))