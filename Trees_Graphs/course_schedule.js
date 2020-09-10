var canFinish = function(numCourses, prerequisites) {
    // create graph
	let graph = new Map()
	
	for(let [v,e] of prerequisites){
		if(!graph.has(v)){
			graph.set(v,[])
		}
		if(!graph.has(e)){
			graph.set(e,[])
		}
		graph.set(v,[...graph.get(v),e])
	}

	function dfs(vertex, visited = new Set()){
		if(visited.has(vertex)){
			return false
		}else{
			visited.add(vertex)
			for(let node of graph.get(vertex)){
				if(!dfs(node,visited)){
					return false
				}
			}
			visited.delete(vertex)
			return true
		}
	}
	for(let vertex of graph.keys()){
		if(!dfs(vertex)){
			return false
		}
	}
	return true
}

let test1 = [[1,0]]
let test2 = [[1,0],[0,1]]

console.log(canFinish(2,test2))