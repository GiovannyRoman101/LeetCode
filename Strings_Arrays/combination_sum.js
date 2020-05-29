// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
// find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	let result = []
	// index to remove duplicates
	function combination( index = 0,currSum = 0, cur = []){
		if(currSum === target){
			result.push(cur)
		} else{
			for(let i = index; i < candidates.length; i++){
				if(candidates[i] <= target - currSum){
					combination(i, currSum +candidates[i], [...cur, candidates[i]])
				}
			}
		}
	}
	combination()
	
	return result
};

let arr1 = [2,3,6,7]
let arr2 = [2,3,5]

console.log(combinationSum(arr1, 7))
//console.log(combinationSum(arr2, 8))