// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you 
// have to modify the input 2D matrix directly. DO NOT 
// allocate another 2D matrix and do the rotation.

// TODO: finish problem
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	if(matrix.length !== 0 || matrix.length === matrix[0].length){
		let topPointer = 0
		let bottomPointer = matrix.length-1
		let leftPointer = matrix[0]
	}
    
};

let arr1 =[[1,2,3],[4,5,6],[7,8,9]]
let arr2 =[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

rotate(arr1)
rotate(arr2)