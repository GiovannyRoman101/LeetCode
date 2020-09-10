/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
	let result =[]
	let start = nums[0]
	let curr = nums[0]
	for(let i =0; i <= nums.length; i++){
		if(curr === nums[i]){
			curr++
		}else{
			if(start === curr -1){
				result.push(`${start}`)
			}else{
				result.push(`${start}->${curr-1}`)
			}
			start = nums[i]
			curr = nums[i]+1
		}
	}
	return result
};

console.log(summaryRanges([0,2,3,4,6,8,9]))