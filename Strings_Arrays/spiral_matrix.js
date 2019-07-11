// Given a matrix of m x n elements (m rows, n columns),
// return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
	let result = []
	if(matrix.length === 0 || matrix[0].length === 0){
		return result
	}
	let i, srow = 0, scol = 0;
	let hight = matrix.length
	let width = matrix[0].length

    while (srow < hight && scol < width) {
		//top 
        for (i = scol; i < width; ++i) { 
        	result.push(matrix[srow][i]); 
        } 
		srow++;
		// left 
        for (i = srow; i < hight; ++i) { 
            result.push(matrix[i][width - 1]); 
        } 
        width--; 
        // bottom
        if (srow < hight) { 
            for (i = width - 1; i >= scol; --i) { 
                result.push(matrix[hight - 1][i]); 
            } 
            hight--; 
        } 

        // left
        if (scol < width) { 
            for (i = hight - 1; i >= srow; --i) { 
                result.push(matrix[i][scol]); 
            } 
            scol++; 
        } 
    } 
	return result
}

let matrix1 = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

let matrix2 = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
]

let matrix3 = [
	[1,2,3,4,5],
	[6,7,8,9,10],
	[11,12,13,14,15],
	[16,17,18,19,20],
	[21,22,23,24,25]
]

let matrix4 = [
	[3],[4]
]
let matrix5 =[
	[3,4,5,6]
]
let matrix6 =[]
console.log(spiralOrder(matrix6))