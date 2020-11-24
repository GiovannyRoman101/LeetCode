// Given a triangle, find the minimum path sum from top to bottom. 
//Each step you may move to adjacent numbers on the row below.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
// runtime exceeds
var minimumTotal = function(triangle) {
	let path = []
	if(triangle === null || triangle === undefined){
		return path
	}
	let min = Infinity
	function dfs(level = 0, index = 0,currSum = 0){
		if(level === triangle.length){
			if(currSum < min){
				min = currSum
				return
			}
		}else if(level > triangle.length || index > triangle[level].length || index < 0 ){
			return
		}else{
			dfs(level +1,index,currSum + triangle[level][index])
			dfs(level +1,index +1,currSum + triangle[level][index])
		}
	}
	dfs()
	return min
};

var minimumTotal1 = function(triangle){

	for(let i = triangle.length -1; i > 0; i--){
		let prev = triangle[i-1]
		let curr = triangle[i]
		for(let j = 0; j < prev.length; j++){
			if(curr[j] < curr[j+1]){
				prev[j] += curr[j]
			}else{
				prev[j] += curr[j+1]
			}
		}
	}
	return triangle[0][0]
}

console.log(minimumTotal1([[2],[3,4],[6,5,7],[4,1,8,3]]))