// can appear at most twice and return the new length
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if(nums.length ===0){
		return 0 
	}
	let count = 0
	let prev = nums[0]
	let ind = 0
	while(ind < nums.length){
		if(prev === nums[ind]){
			count++
			if(count > 2){
				nums.splice(ind, 1)
				ind--
			}
		}else{
			prev = nums[ind]
			count = 1
		}
		ind++
	}
	return nums
}

let arr = [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(arr))