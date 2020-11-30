// The n-queens puzzle is the problem of
// placing n queens on an n×n chessboard
// such that no two queens attack each
// other.

//51
// The n-queens puzzle is the problem of
// placing n queens on an n×n chessboard
// such that no two queens attack each
// other.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	let result = []
	let grid =[]
	let str =''
	for(let i = 0; i < n; i++){
		str += '.'
	}
	for(let i =0; i < n; i++){
		grid.push(str)
	}
	placeQueens(0,grid, result)
	return result
}
function placeQueens(row, grid, sol = []){
	if(row === grid.length){
		sol.push([...grid])
	}else{
		for(let col = 0; col < grid.length; col++){
			if(isValid(grid,row,col)){
				grid[row] = grid[row].slice(0,col)+'Q' + grid[row].slice(col+1)
				placeQueens(row +1, grid, sol)
				grid[row] = grid[row].slice(0,col)+'.' + grid[row].slice(col+1)
			}
		}
	}
}
function isValid(grid, row,col){
	for(let i = 0; i < row; i++){
		for(let j = 0; j < grid[row].length;j++){
			if(j === col && grid[i][j] === 'Q'){
				return false
			}
			let slope = (i-row)/(j-col)
			if(Math.abs(slope) === 1 && grid[i][j] === 'Q'){
				return false
			}
		}
	}
	return true
}


console.log(solveNQueens(5))