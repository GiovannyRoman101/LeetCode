/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */

function Node(val, left = null, right = null, next = null) {
	this.val = val
	this.left = left
	this.right = right
	this.next = next
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	let currlevel=[]
	let children =[]
	if(!root){
		return root
	} else{
		let curr = root
		currlevel.push(curr)
		while(currlevel.length !== 0){
			if(currlevel.length === 1){
				let left = currlevel.shift()
				if(left !== null){
					children.push(left.left)
					children.push(left.right)
					left.next = null
				}
			}else{
				let left = currlevel.shift()
				let right = currlevel.shift()
				if(left === null && right != null){
					currlevel.unshift(right)
				}else if(left !==null && right !== null){
					left.next = right
					children.push(left.left)
					children.push(left.right)
					currlevel.unshift(right)
				}

			}
			if(currlevel.length === 0){
				currlevel = children
				children = []
			}
		}
	}
	return root
};



let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)
console.log(connect(root))