/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
	let permutation = []
	for(let i =0; i < m;i++){
		permutation.push(i +1)
	}
	for(let i = 0; i < queries.length; i++){
		let key = queries[i]
		for(let j = 0; j < permutation.length; j++){
			let num = permutation[j]
			if(key === num){
				queries[i] = j
				permutation.splice(j,1)
				permutation.unshift(num)
			}
		}
	}
	return queries

};

console.log(processQueries([3,1,2,1],5))