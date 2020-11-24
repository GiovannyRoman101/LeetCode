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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if(pre.length === 0 || post.length === 0){
		return null
	}
	let root = new TreeNode(pre[0])
	let lpre = pre.slice(1,post.indexOf(pre[1])+2)
	let lpost = post.slice(0,post.indexOf(pre[1])+1)

	let rpre = pre.slice(post.indexOf(pre[1])+2,post.length)
	let rpost = post.slice(post.indexOf(pre[1])+1, post.length-1)

	root.left = constructFromPrePost(lpre,lpost)
	root.right = constructFromPrePost(rpre,rpost)

	return root
}

let pre = [1,2,4,5,3,6,7]
let post = [4,5,2,6,7,3,1]

let pre1 = [2,1,3]
let post1 = [3,1,2]
// [1,2,3,4,5,6,7]

console.log(constructFromPrePost(pre1,post1))