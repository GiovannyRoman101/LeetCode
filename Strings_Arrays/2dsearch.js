/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0){
        return false
    }
    
    let row = 0
    
    while(row < matrix.length){
        if(matrix[row][0] <= target && matrix[row][matrix[row].length-1] >=  target){
            break
        }else{
            if(matrix[row][0] > target){
                return false
            }else{
                row++
            }
        }
	}
	if(row === matrix.length){
		return false
	}
    let left = 0
    let right = matrix[row].length -1
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(target === matrix[row][mid]){
            return true
        }else if(matrix[row][mid] > target){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return false
};

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
console.log(searchMatrix(matrix3,2))
//console.log(searchMatrix(matrix2,13))