var canFinish = function(numCourses, prerequisites) {
    // create graph
    let graph = {}
    for(let i = 0; i < numCourses; i++){
        graph[i] =[]
    }
    for(let i = 0; i < prerequisites.length; i++){
        let course = prerequisites[i]
        graph[course[0]].push(course[1])
	}

	let marked =[]
	let visited ={}
	let cycle = false

	function dfs(course){
		visited[course] = true
		marked[course] = true
		for(let prereq in graph[course]){
			if(cycle){
				return
			}
			if (!marked[prereq]){
				dfs(prereq)
			}else if(visited[prereq]){
				cycle = true
				return
			}
			visited[prereq] = false
		}
	}
	
	for(let i=0; i<numCourses; i++) {
		if(!visited[i] && !cycle) {
			dfs(i)
		}
	}       
	return !cycle
}

let test1 = [[1,0]]
let test2 = [[1,0],[0,1]]

console.log(canFinish(2,test2))