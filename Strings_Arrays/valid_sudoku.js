/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Map()
    let cols = new Map()
	let boxes = new Map()
	
	//
    for (let i = 0; i < 9; i++) {
        rows.set(i, new Map())
        cols.set(i, new Map())
        boxes.set(i, new Map())
    }

    for (let i = 0; i < board.length; i++) {
		let curRow = rows.get(i)
		
        for (let j = 0; j < board[i].length; j++) {
            let curCol = cols.get(j)
            let curBox = boxes.get(Math.floor(i / 3) * 3 + Math.floor(j / 3))
            let num = board[i][j]
            if (num === '.') {
                continue
            }
            if (curBox.get(num) !== undefined || curCol.get(num) !== undefined || curRow.get(num) !== undefined) {
                return false
            }
            curBox.set(num,curBox.get(num) === undefined ? 0 : curBox.get(num) + 1)
            curCol.set(num,curCol.get(num) === undefined ? 0 : curCol.get(num) + 1)
            curRow.set(num,curRow.get(num) === undefined ? 0 : curRow.get(num) + 1)
        }
    }
    return true
}

// console.log(
//     isValidSudoku([
//         ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//         ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//         ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//         ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//         ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//         ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//         ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//         ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//         ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
//     ])
// )
// console.log(
//     isValidSudoku([
//         ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//         ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//         ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//         ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//         ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//         ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//         ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//         ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//         ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
//     ])
// )
console.log(
    isValidSudoku([
        ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
        ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
        ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ])
)
