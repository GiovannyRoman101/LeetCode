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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function isValid (root, low, high) {
        if (!root) {
			return true
		}
        if (root.val <= low || root.val >= high) { 
			return false 
		}
        if (root.left && root.val <= root.left.val ) { 
			return false 
		}
        if (root.right && root.val >= root.right.val ) { 
			return false 
		}
        
        return isValid(root.left, Math.min(root.val, low), Math.min(root.val, high)) && isValid(root.right, Math.max(root.val, low), Math.max(root.val, high))
    }
    return isValid(root, -Infinity, Infinity)
};

let root = new TreeNode(1)
// root.left = new TreeNode(1)
root.right = new TreeNode(1)
// root.right.left = new TreeNode(3)
// root.right.right = new TreeNode(6)
console.log(isValidBST(root))