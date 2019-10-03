/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	let dp = []
	let vertSum = grid[0][0]
	for(let i = 0; i < grid.length; i++){
		dp.push([])
	}
	dp[0][0] = grid[0][0]

	for(let row = 1; row < grid.length; row++){
		dp[row][0] = grid[row][0] + dp[row-1][0]
	}
	for(let col = 1; col < grid[0].length; col++){
		dp[0][col] = grid[0][col] + dp[0][col-1]
	}

	for(let row = 1; row < grid.length; row++){
		for(let col = 1; col < grid[0].length; col++){
			dp[row][col] = grid[row][col] + Math.min(dp[row-1][col], dp[row][col -1])
		}
	}
	console.log(dp)
	return dp[dp.length-1][dp[0].length -1]
}

let arr = [[1,2,5],[3,2,1]]

console.log(minPathSum(arr))
