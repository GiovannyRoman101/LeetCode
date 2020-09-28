/**
 * @param {number[][]} envelopes
 * @return {number}
 */

 // TODO: it can be solved with dfs but it can be improved if i kept track of previous solutions
// and not travel to previous solutions 
var maxEnvelopes = function(envelopes) {
	envelopes.sort((a,b)=>{
		return b[0] - a[0]
	})
	let max = 0
	
	function dfs(index,curr = 1){
		if(max < curr){
			max = curr
		}
		let env = envelopes[index]
		for(let i = index -1; i >= 0; i--){
			if(env[0] < envelopes[i][0] && env[1] < envelopes[i][1]){
				dfs(i, curr+1)
			}
		}
	}
	for(let i = 0; i < envelopes.length; i++){
		dfs(i)
	}
	return max
}


console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
console.log(maxEnvelopes([[1,1]]))
console.log(maxEnvelopes([[4,5],[6,7],[2,3]]))
console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]))
console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))

console.log(maxEnvelopes([[30,50],[12,2],[3,4],[12,15]]))