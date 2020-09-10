/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	let map = new Map()
	for(let i = 0; i < nums.length;i++){
		if(!map.has(nums[i])){
			map.set(nums[i], 1)
		}else{
			return nums[i]
		}
	}
	return -1
}
console.log(findDuplicate([3,1,3,4,2]))