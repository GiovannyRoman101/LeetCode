/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
	let pqueue = []
    for(let i = 0; i < matrix.length; i++){
		let row = matrix[i]
		for(let j = 0; j < row.length; j++){
			let contain = false
			for(let k = 0; k < pqueue.length; k++){
				if(pqueue[k] > row[j]){
					pqueue.splice(k,0,row[j])
					contain = true
					break
				}
			}
			if(!contain){
				pqueue.push(row[j])
			}
		}
	}
	return pqueue[k-1]
};

console.log(kthSmallest([[5]],1))