/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// TODO: make it my own
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0){
		return false
	}
	let row = 0
	let col = matrix[0].length-1
	for(row = 0; row < matrix.length; row++){
		if(matrix[row][col] >= target){
			break
		}
	}
	let left = 0
	let right = col
	while(left <= right){
		let mid = Math.floor((left + right +1)/2)
		if(target === matrix[row][mid]){
			return true
		}else if(target > matrix[row][mid]){
			left = mid+1
		}else {
			right = mid-1
		}
	}
	return false
}

let matrix = [
	[1,   3,  5,  7],
	[10, 11, 16, 20],
	[23, 30, 34, 50]
]

let matrix2  = [
	[1,   3,  5,  7],
	[10, 11, 16, 20],
	[23, 30, 34, 50]
]
let matrix3 = [[1]]
console.log(searchMatrix(matrix3,3))
//console.log(searchMatrix(matrix2,13))