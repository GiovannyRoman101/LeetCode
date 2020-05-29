/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

function Node(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	let currlevel =[]
	let children = []
	if(root === null){
		return null
	}else{
		let curr = root
		currlevel.push(curr)
		while(currlevel.length !==0){
			curr = currlevel.shift()
			if(currlevel.length !==0){
				curr.next = currlevel[0]
			}else{
				curr.next = null
			}
			if(curr.left !== null){
				children.push(curr.left)
			}
			if(curr.right !== null){
				children.push(curr.right)
			}
			if(currlevel.length === 0){
				currlevel = children
				children = []
			}
		}
	}
	return root
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.right = new Node(7)

console.log(connect(root))