/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
	nums.sort((a,b)=>{return b-a})
	let sum = nums.reduce((total,currval)=>{return total+currval})
	let currSum = 0
	let result =[]
	for(let i = 0; i < nums.length; i++){
		currSum += nums[i]
		sum -= nums[i]
		result.push(nums[i])
		if(currSum > sum ){
			return result
		}
	}
	return []
}

console.log(minSubsequence([4,3,10,9,8]))