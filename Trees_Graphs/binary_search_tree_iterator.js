class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}
function dfs(root, arr = []){
	if(root!== null){
		if(root.left !==null){
			dfs(root.left,arr)
		}
		arr.push(root.val)
		if(root.right !== null){
			dfs(root.right,arr)
		}
	}
	return arr
}
class BSTIterator {
    constructor(root) {
		this.values = dfs(root)
	}
    /**
     * @return the next smallest number
     * @return {number}
     */

    next() {
		if(this.values.length !== 0){
			return this.values.shift()
		}
	}

    /**
     * @return whether we have a next smallest number
     * @return {boolean}
     */
    hasNext() {
		if(this.values.length === 0){
			return false
		}
		return true
	}
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let root = new TreeNode(7)
root.left = new TreeNode(3)
root.right = new TreeNode(15)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(20)

let it = new BSTIterator(root)
console.log(it.next())
console.log(it.next())
console.log(it.next())