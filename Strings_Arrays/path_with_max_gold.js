/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
	let max = 0
    for(let i = 0; i < grid.length; i++){
		for(let j = 0; j < grid[i].length; j++){
			dfs(i,j)
		}
	}
	
	function dfs(row,col, curSum = 0){
		if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === 0){
			if(curSum > max){
				max = curSum  
			}
		}else{
			let temp = grid[row][col]
			grid[row][col] = 0
			dfs(row+1,col, curSum + temp)
			dfs(row-1,col, curSum + temp)
			dfs(row,col+1, curSum + temp)
			dfs(row,col-1, curSum + temp)
			grid[row][col] = temp
		}
	}
	return max
};

console.log(getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]))