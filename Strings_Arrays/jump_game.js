/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let curr = 0
	let goal = nums.length -1
	let max = 0
	while(curr < nums.length){
		max = Math.max(max, curr +nums[curr])
		if(max >= goal){
			return true
		}
		if(max <= curr && nums[curr] === 0){
			return false
		}
		curr++
	}
	return false
}

let nums = [2, 3, 1, 1, 4]
let nums2 = [3, 2, 1, 1, 0, 4]

//console.log(canJump(nums))
console.log(canJump(nums2))
