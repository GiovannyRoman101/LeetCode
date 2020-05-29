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
	let grid = []
	let str = ''
	for(let i = 0; i < n; i++){
		str +='.'
	}
	for(let i =0; i < n; i++){
		grid.push(str)
	}

	return grid
}


console.log(solveNQueens(4))