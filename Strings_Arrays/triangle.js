// Given a triangle, find the minimum path sum from top to bottom. 
//Each step you may move to adjacent numbers on the row below.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
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

console.log(minimumTotal([[-1],[3,2],[-3,1,-1]]))