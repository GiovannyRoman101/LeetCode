/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	if(board.length === 0 || word.length === 0){
		return false
	}
	for(let i = 0; i < board.length; i++){
		for(let j = 0; j < board[0].length; j++){
			if(search(board,i,j,word)){
				return true
			}
		}
	}
	return false
}

function search(board,row,col,word){
	if(word.length === 0){
		return true
	}
	if(row < 0 || col < 0 || row >= board.length || col >= board[0].length){
		return false
	}
	if(word[0] !== board[row][col]){
		return false
	}
	let letter = board[row][col]
	board[row][col] = ''
	let result = search(board,row -1, col,word.slice(1)) || search(board,row +1, col,word.slice(1))
		|| search(board,row, col -1,word.slice(1)) || search(board,row, col+1,word.slice(1))
	board[row][col] = letter
	return result
}
let board =
[
	['A','B','C','E'],
	['S','F','C','S'],
	['A','D','E','E']
]

console.log(exist(board,'SEE'))