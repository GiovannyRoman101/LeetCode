/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	let evenptr = 0
	for(let i = 0; i < A.length; i++){
		if(A[i] % 2 === 0){
			let temp = A[i]
			A[i] = A[evenptr]
			A[evenptr] = temp
			evenptr++
		}
	}
	return A
}

console.log(sortArrayByParity([3,1,2,4]))