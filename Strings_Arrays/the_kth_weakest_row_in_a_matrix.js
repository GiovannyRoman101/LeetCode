/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
	let result = []
	for(let i=0; i < mat.length; i++){
		result.push([i])
	}
	for(let i = 0; i < mat.length;i++){
		let rank = 0
		for(let j = 0; j < mat[i].length; j++){
			if(mat[i][j] === 1){
				rank++
			}
		}
		result[i].push(rank)
	}
	result.sort((a,b)=>{return a[1] - b[1]})
	return result.map(item =>{
		return item[0]
	}).slice(0,k)
};


console.log(kWeakestRows([[1,1,0,0,0],
	[1,1,1,1,0],
	[1,0,0,0,0],
	[1,1,0,0,0],
	[1,1,1,1,1]],3))