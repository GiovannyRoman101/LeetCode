
// TODO: 

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
	let g = new Map()
	let visited = new Set()
	let res = []
	for(let edge of edges){
		if(visited.has(edge[0])&& visited.has(edge[1])){
			res.push(edge)
		}else{
			if(!g.has(edge[0])){
				g.set(edge[0],[])
			}
			g.set(edge[0],[...g.get(edge[0]),edge[1]])
			if(!g.has(edge[1])){
				g.set(edge[1],[])
			}
			g.set(edge[1],[...g.get(edge[1],edge[0])])
			visited.add(edge[0])
			visited.add(edge[1])
		}
	}
	
	return res
}

console.log(findRedundantConnection([[9,10],[5,8],[2,6],[1,5],[3,8],[4,9],[8,10],[4,10],[6,8],[7,9]]))