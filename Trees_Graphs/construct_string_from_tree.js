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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if(t === null){
		return ''
	}else{
		if(t !== null && t.left === null && t.right === null){
			return t.val +''
		}
		if(t.left === null && t.right !== null){
			return t.val +'()(' +tree2str(t.right)+')' 
		}if (t.left !== null && t.right === null){
			return t.val +'(' +tree2str(t.left)+')'
		}
		else{
			return t.val +'('+tree2str(t.left)+')(' +tree2str(t.right)+')' 
		}
	}
};


let tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(3)
tree1.left.left = new TreeNode(4)

let tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)
tree2.left.right = new TreeNode(4)
console.log(tree2str(tree1))
