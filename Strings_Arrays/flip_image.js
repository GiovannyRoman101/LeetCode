/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length ; i++){
		let row = A[i]
		let j = 0
		let end = row.length-1
		while(j < end){
			let temp = row[j]
			row[j] = row[end]
			row[end] = temp
			j++
			end--
		}
		for(let j = 0; j < row.length; j++){
			if(row[j] === 1){
				row[j] = 0
			}else{
				row[j] = 1
			}
		}
	}
	return A
};

