// Given two integers n and k, return all 
// possible combinations of k numbers out 
// of 1 ... n.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	let result =[]
	
	function dps(num, curr= []){
		if(curr.length === k){
			result.push(curr)
			return 
		}else{
			for(let i = num; i<=n; i++){
				let temp = [...curr, i]
				dps(i+1,temp)
			}
		}
	}

	dps(1)
	return result
}

console.log(combine(4,2))