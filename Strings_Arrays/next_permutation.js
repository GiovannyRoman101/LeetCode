/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length ===0){
		return
	}else{
		let largest = 0
		for(let i =0; i < nums.length; i++){
			if(nums[largest] < nums[i]){
				largest = i
			}
		}
		if(largest === 0){
			let temp = nums[largest]
			nums[largest] = nums[nums.length-1]
			nums[nums.length-1] = temp
		}else{
			let temp = nums[largest]
			nums[largest] = nums[largest-1]
			nums[largest-1] = temp
		}
	}
};

let nums = [1,3,2]
let nums2 = [3,2,1]
let nums3 = [1,1,5]
nextPermutation(nums)
console.log(nums)