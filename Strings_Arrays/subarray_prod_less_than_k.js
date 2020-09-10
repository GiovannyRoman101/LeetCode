/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let result = 0
	let i = 0
	let j = 0
	let prod = 1
	while(i < nums.length && j < nums.length){
		
		if(prod * nums[i] < k){
			prod *= nums[i] 
			// if 10*5 is true then 5 and 10 is less than k
			result += i-j+1
			i++
		}else{
			prod /= nums[j]
			j++
		}
	}
    return result
}
//[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))
