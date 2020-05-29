var canFinish = function(numCourses, prerequisites) {
    
	let graph = new Map()
	let visiting = new Set()
	// adding nodes with egdes
	for(let [v,e] of prerequisites){
		if(graph.has(v)){
			let edges = graph.get(v)
			edges.push(e)
			graph.set(v,edges)
		}else{
			graph.set(v,[e])
		}
	}

	function dfs(vertex){
		visiting.add(vertex)
		let edges = graph.get(vertex)
		if(edges !== undefined){
			for(let edge of edges){
				if(visiting.has(edge)){
					return true
				}
				if(dfs(edge)){
					return true
				}
			}
		}
	}
	//check if it loops
	for(let key of graph.keys()){
		if(dfs(key)){
			return false
		}
	}
	return true
}

let test1 = [[1,0]]
let test2 = [[1,0],[0,1]]

console.log(canFinish(2,test2))