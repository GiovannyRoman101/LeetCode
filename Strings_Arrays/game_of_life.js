// According to the Wikipedia's article: "The Game of Life, also known simply as Life,
// is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
// Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the
// following four rules (taken from the above Wikipedia article):

// 1.Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// 2.Any live cell with two or three live neighbors lives on to the next generation.
// 3.Any live cell with more than three live neighbors dies, as if by over-population..
// 4.Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current
// state. The next state is created by applying the above rules simultaneously to every cell in
// the current state, where births and deaths occur simultaneously.

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let temp = []
    for (let i = 0; i < board.length; i++) {
        temp.push([...board[i]])
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            function surroundings(x, y) {
                let counter = 0
                for (let i = x - 1; i <= x + 1; i++) {
                    for (let j = y - 1; j <= y + 1; j++) {
                        if (
                            (i === x && y === j) ||
                            i < 0 ||
                            j < 0 ||
                            board.length <= i ||
                            board[i].length <= j
                        ) {
                            continue
                        } else if (temp[i][j] === 1) {
                            counter++
                        }
                    }
                }
                if (counter < 2 || counter > 3) {
                    board[i][j] = 0
                } else if (counter === 3) {
                    board[i][j] = 1
                }
            }
            surroundings(i, j)
        }
    }
    console.log(board)
}

let board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]

gameOfLife(board)
