/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
// TODO: code can be neat
var queensAttacktheKing = function (queens, king) {
    let board = []
    for (let i = 0; i < 8; i++) {
        let arr = []
        for (let j = 0; j < 8; j++) {
            arr.push(" ")
        }
        board.push(arr)
    }
    for (let queen of queens) {
        board[queen[0]][queen[1]] = 'Q'
    }
    board[king[0]][king[1]] = 'K'
    let result = []
    function surrounding(king){
		//checks the col
		for(let i = king[0]; i >= 0; i--){
			if(board[i][king[1]] === 'Q'){
				result.push([i,king[1]])
				break
			}
		}
		for(let i = king[0]; i < 8; i++){
			if(board[i][king[1]] === 'Q'){
				result.push([i,king[1]])
				break
			}
		}
		// check the row
		for(let j = king[1]; j >= 0; j--){
			if(board[king[0]][j] === 'Q'){
				result.push([king[0],j])
				break
			}
		}
		for(let j = king[1]; j < 8; j++){
			if(board[king[0]][j] === 'Q'){
				result.push([king[0],j])
				break
			}
		}
		// check diagonal from top left to bottom right
		let x = king[0]
		let y = king[1]
		while(y >= 0 && x >=0){
			if(board[x][y] === 'Q'){
				result.push([x,y])
				break
			}
			x--
			y--
		}
		x = king[0]
		y = king[1]
		while(y < 8 && x < 8){
			if(board[x][y] === 'Q'){
				result.push([x,y])
				break
			}
			x++
			y++
		}

		// check diagonal from top right to bottom left
		x = king[0]
		y = king[1]
		while(y < 8 && x >=0){
			if(board[x][y] === 'Q'){
				result.push([x,y])
				break
			}
			x--
			y++
		}
		x = king[0]
		y = king[1]
		while(y >= 0 && x < 8){
			if(board[x][y] === 'Q'){
				result.push([x,y])
				break
			}
			x++
			y--
		}
	}
	surrounding(king)
    return result
}

let queens1 = [
    [0, 1],
    [1, 0],
    [4, 0],
    [0, 4],
    [3, 3],
    [2, 4],
]
let king1 = [0, 0]

let queens2 = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]]
let king2 = [3,3]

console.log(queensAttacktheKing(queens2, king2))
