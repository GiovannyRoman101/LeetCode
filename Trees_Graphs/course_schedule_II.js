/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// TODO: does not give the right order
var findOrder = function(numCourses, prerequisites) {
	let graph = new Map()
	let result = new Set()
	let visited = new Set()
	let visiting = new Set()

	for(let [v,e] of prerequisites){
		if(!graph.has(v)){
			graph.set(v,[])
		}
		if(!graph.has(e)){
			graph.set(e,[])
		}
		graph.set(v,[...graph.get(v),e])
	}
	function dfs(vertex){
		visiting.add(vertex)
		for(let edge of graph.get(vertex)){
			if(visited.has(edge)){
				continue
			}
			if(visiting.has(edge)){
				return true
			}
			if(dfs(edge)){
				return true
			}
		}
		visiting.delete(vertex)
		visited.add(vertex)
		result.add(vertex)
		return false
	}

	for(let key of graph.keys()){
		if(dfs(key)){
			return []
		}
	}
	return [...result]
}

console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]]))