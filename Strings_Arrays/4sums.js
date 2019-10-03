/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) =>{
		return a - b
	})
	let result =[]
	for(let i = 0 ; i < nums.length -3; i++){
		// avoid repeats
		if(i > 0 && nums[i] === nums[i -1]){
			continue
		}
		// avoid repeats
		for(let j = i +1; j < nums.length -2; j++){
			if(j !== i +1 && nums[j] === nums[j-1]){
				continue
			}
			
			console.log(i +' ' + j)
		}

	}
	return result
}

let arr = [1, 0, -1, 0, -2, 2]
console.log(fourSum(arr,0))