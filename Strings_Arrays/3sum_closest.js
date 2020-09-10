/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums.sort((a,b)=>{return a-b})
	let closest = Infinity
	let result = 0

	for(let i = 0; i < nums.length; i++){
		let left = i + 1
		let right = nums.length - 1
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right]
			
			if(Math.abs(sum - target) < closest){
				closest = Math.abs(sum - target)
				result = sum
			}


			if(sum === target){
				return sum
			}else if(sum < target){
				left++
			}else {
				right--
			}
		}
	}
	return result
};

console.log(threeSumClosest([-1,2,1,-4],-9))