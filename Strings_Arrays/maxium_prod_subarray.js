/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	if( nums.length === 0){
		return 0
	}
	let curMax = nums[0]
	let curMin = nums[0]
	let max = nums[0]
	for(let i = 1; i < nums.length;i++){
		let prodMin = nums[i]*curMin
		let prodMax = nums[i]*curMax
		curMin = Math.min(nums[i],prodMin,prodMax)
		curMax = Math.max(nums[i],prodMin,prodMax)
		max = Math.max(max, curMax)
	}
	return max
}


console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))