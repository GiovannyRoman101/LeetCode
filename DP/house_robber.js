/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0){
		return 0
	}else if(nums.length === 1){
		return nums[0]
	}
	let memo =[]
	memo[0] = nums[0]
	memo[1] = Math.max(nums[0],nums[1])
	for(let i = 2; i < nums.length; i++){
		memo[i] = Math.max(memo[i-1], memo[i-2] + nums[i])
	}
	return Math.max(memo[nums.length -1],memo[nums.length -2] )
};
console.log(rob([2,1,1,2]))
console.log(rob([1,3,1,3,100]))