// Given a collection of integers that might contain duplicates,
// nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
	nums.sort((a,b) =>{ return a-b})
	let result = []
	
	function findSubsets(subset = [],startindex =0){
		result.push([...subset])
		for(let i = startindex; i < nums.length; i++){
			if(i !== startindex || nums[i] === nums[i-1]){
				continue
			}
			findSubsets([...subset, nums[i]],i+1)
		}
	}
	findSubsets()
	return result
};

let arr1 = [1,2,2]
console.log(subsetsWithDup(arr1))