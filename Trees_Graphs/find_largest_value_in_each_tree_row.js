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
 * @return {number[]}
 */
var largestValues = function (root) {
    let result = []
    let queue = []
    if (root === null) {
        return result
    } else {
        queue.push(root)
        result.push(findMax(queue))
        let children = []
        while (queue.length !== 0) {
            let curr = queue.pop()
            if (curr.left !== null) {
                children.push(curr.left)
            }
            if (curr.right !== null) {
                children.push(curr.right)
            }
            if (queue.length === 0) {
				if(children.length !== 0){
					result.push(findMax(children))
				}
                queue = children
                children = []
            }
        }
    }
    return result
}
function findMax(list) {
    let max = null
    for (let i = 0; i < list.length; i++) {
        if (max === null) {
            max = list[i].val
        } else if (max < list[i].val) {
            max = list[i].val
        }
    }
    return max
}

function largestValues1(root){
	let result =[]
	if(root === null){
		return result
	}else{
		let level = 0
		let queue = []
		queue.push(root)
		let children = []
		while(queue.length !== 0){
			let curr = queue.shift()
			if(result[level] === undefined || result[level] < curr.val){
				result[level] = curr.val
			}
			if(curr.left !== null){
				children.push(curr.left)
			}
			if(curr.right !== null){
				children.push(curr.right)
			}
			if(queue.length === 0){
				queue = children
				children = []
				level++
			}
		}
	}
	return result
}

let root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.left = new TreeNode(5)
root.left.right = new TreeNode(3)
root.right = new TreeNode(2)
root.right.right = new TreeNode(9)

console.log(largestValues1(root))