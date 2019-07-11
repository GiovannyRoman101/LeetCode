// A robot is located at the top-left corner of a m x n grid
//(marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid
//(marked 'Finish' in the diagram below).

// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 
function unoptimizeUniquePaths(m, n) {
    function explore(m, n, curX = 0, CurY = 0) {
        if (curX === m - 1 && CurY === n - 1) {
            return 1
        } else if (curX > m - 1 || CurY > n - 1) {
            return 0
        } else {
            return explore(m, n, curX + 1, CurY) + explore(m, n, curX, CurY + 1)
        }
    }
    return explore(m, n)
}
// dynamic programming
function uniquePaths(m,n){
	if(m <= 0 || n <= 0){
		return 0
	}
	// create 2d array eg.
	// 1 1  
	// 1 
	// 1

	let board = []
	for(let i =0 ; i < m ; i++){
		board.push([1])
	}
	for(let i = 0 ; i < n -1;i++){
		board[0].push(1)
	}
	for(let i = 1; i < m; i++){
		for(let j = 1; j < n; j++){
			board[i][j] = board[i -1][j] + board[i][j-1]
		}
	}
	return board[m-1][n-1]
}

console.log(uniquePaths(1, 0))

// m = 3 n =2 output = 3
// m = 7 n =3 output = 28
