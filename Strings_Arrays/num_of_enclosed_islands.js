/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let count = 0
    let bot = grid.length - 1
    let right = grid[0].length - 1

    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
            return
        } else {
            if (grid[x][y] === 0) {
                grid[x][y] = 1
                dfs(x - 1, y)
                dfs(x + 1, y)
                dfs(x, y - 1)
                dfs(x, y + 1)
            }
        }
    }
	// fill the border
	// top and bot
    for (let i = 0; i <= right; i++) {
        if (grid[0][i] === 0) {
            dfs(0, i)
        }
        if (grid[bot][i] === 0) {
            dfs(bot, i)
        }
	}
	//left and right
	for(let i = 0; i <= bot; i++){
		if (grid[i][0] === 0) {
            dfs(i, 0)
        }
        if (grid[i][right] === 0) {
            dfs(i, right)
        }
	}
	
    for (let i = 0; i <= bot; i++) {
        for (let j = 0; j < right; j++) {
            if (grid[i][j] === 0) {
                count++
                dfs(i, j)
            }
        }
    }
    return count
}

// console.log(
//     closedIsland([
//         [1, 1, 1, 1, 1, 1, 1, 0],
//         [1, 0, 0, 0, 0, 1, 1, 0],
//         [1, 0, 1, 0, 1, 1, 1, 0],
//         [1, 0, 0, 0, 0, 1, 0, 1],
//         [1, 1, 1, 1, 1, 1, 1, 0],
//     ])
// )
console.log(
    closedIsland([
        [0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
    ])
)
