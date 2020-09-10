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
	grid[0].splice(2,1,'Q')
	return grid
}

function isValid(board,row,col){
	for(let i = 0; i < row ; i++){
		if(board[i].charAt(col) === 'Q' ){
			return false
		}
	}
	let temp = board[i]
	for(let i = 0; i < temp.length; i++){
		if(i === col ){
			continue
		}else if(temp.charAt(i) === 'Q'){
			return false
		}
	}
	let i = row-1 
	let j = col-1
	while(i > 0 && j > 0){
		if(board[i].charAt(j) === 'Q'){
			return false
		}
	}
	
}


console.log(solveNQueens(4))