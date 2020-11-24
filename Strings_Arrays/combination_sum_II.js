/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	let result = []
	
	function backtracking(index,sum = 0,currSum = []){
		if(sum === target){
			result.push([...currSum])
		}else{
			for(let i = index; i< candidates.length; i++){
				if(sum + candidates[i] > target){
					continue
				}else{
					if(i > index && candidates[i] === candidates[i-1]){
						continue
					}else{
						currSum.push(candidates[i])
						backtracking(i+1,sum + candidates[i],currSum)
						currSum.pop()
					}
				}
			}
		}
	}
	candidates.sort((a,b)=>{return a-b})
	backtracking(0)
	return result
}

console.log(combinationSum2([10,1,2,7,6,1,5],8))

console.log(combinationSum2([2,5,2,1,2],5))