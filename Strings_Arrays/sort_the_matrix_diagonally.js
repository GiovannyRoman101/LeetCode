/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
	function sort_line(x,y){
		while(x < mat.length && y < mat[x].length ){
			let nextX = x+1
			let nextY = y+1
			while(nextX < mat.length && nextY < mat[x].length ){
				if(mat[x][y] > mat[nextX][nextY]){
					let temp = mat[x][y]
					mat[x][y] = mat[nextX][nextY]
					mat[nextX][nextY] = temp
				}
				nextX++
				nextY++
			}
			x++
			y++
		}
	}
	for(let x = 0; x < mat.length; x++){
		sort_line(x,0)
	}
	for(let y =1;y < mat[0].length; y++){
		sort_line(0,y)
	}
	return mat
}


let mat = [
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2]
]
console.log(diagonalSort(mat))
