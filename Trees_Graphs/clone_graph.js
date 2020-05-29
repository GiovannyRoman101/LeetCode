/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function Node(val, neighbors) {
	this.val = val === undefined ? 0 : val;
	this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node === null){
		return node
	}else{
		let map = new Map()
		function clone(root){
			if(!map.has(root.val)){
				map.set(root.val, new Node(root.val))
				// map calls clone function on all the neighbors 
				map.get(root.val).neighbors = root.neighbors.map(clone)
			}
			return map.get(root.val)
		}
		return clone(node)
	}
};