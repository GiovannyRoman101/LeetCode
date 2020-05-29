/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val,children) {
	this.val = val
	this.children = children
}

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	let result =[]
	if(root === null || root === undefined){
		return result
	}else{
		let queue = []
		let curlev= []
		let nexlev =[]
		queue.push(root)
		while(queue.length !== 0){
			let curr = queue.shift()
			curlev.push(curr.val)
			if(curr.children !== undefined || curr.children !== null || curr.children.length !== 0){
				for(let child of curr.children){
					if(child !== null){
						nexlev.push(child)
					}
				}
			}
			if(queue.length === 0){
				result.push(curlev)
				queue = nexlev
				curlev = []
				nexlev =[]
			}
		}
		return result
	}
};

let bot1 = new Node(5,[])
let bot2 = new Node(6,[])
let botup = new Node(3, [bot1,bot2])
let bot3 = new Node(2,[])
let bot4 = new Node(4,[])
let root = new Node(1,[botup,bot3,bot4])

console.log(levelOrder(root))