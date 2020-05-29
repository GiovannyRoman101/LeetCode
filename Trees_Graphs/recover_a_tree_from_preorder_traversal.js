/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // TODO: dfs
function TreeNode(val){
	this.val = val
	this.left = this.right = null
}
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(str) {
	if(str === null || str.length === 0){
		return null
	}else{
		let root = getNumber(str)
	}

};

function getNumber(str){
	let index = str.indexOf('-')
	if(index === -1){
		return parseInt(str)
	}
	return parseInt(str.slice(0,index))
}


let s1 = '1-2--3--4-5--6--7'
console.log(recoverFromPreorder(s1))
let s2 = '1-2--3---4-5--6---7'
let s3 = '1-401--349---90--88'

