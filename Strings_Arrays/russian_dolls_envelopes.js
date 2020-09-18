/**
 * @param {number[][]} envelopes
 * @return {number}
 */

 // TODO: it can be solved with dfs but it can be improved if i kept track of previous solutions
// and not travel to previous solutions 
var maxEnvelopes = function(envelopes) {
	envelopes.sort((a,b)=>{
		return a[0] - b[0]
	})
	if(envelopes.length === 0){
		return 0
	}else if (envelopes.length === 1){
		return 1
	}else{
		let max = 1
		let curr = envelopes[0]
		let count = 1

		for(let i = 1; i < envelopes.length; i++){
			if(curr[0] < envelopes[i][0] && curr[1]< envelopes[i][1]){
				count++
				if(count > max){
					max = count
				}
				curr = envelopes[i]
			}else if(curr[0] === envelopes[i][0] || curr[1] === envelopes[i][1]){
				if(curr[0] > envelopes[i][0] || curr[1] > envelopes[i][1]){
					curr = envelopes[i]
				}
			}else{
				count = 1
				curr = envelopes[i]
			}
		}
		return max
	}
}

// console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
// console.log(maxEnvelopes([[1,1]]))
// console.log(maxEnvelopes([[4,5],[6,7],[2,3]]))
// console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]))
// console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))
console.log(maxEnvelopes([[30,50],[12,2],[3,4],[12,15]]))