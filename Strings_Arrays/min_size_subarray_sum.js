/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(s, nums) {
// 	let left = 0
// 	let right = 0
// 	let minLen = Infinity
// 	let sum = 0
// 	while(right < nums.length){
// 		sum += nums[right]
// 		while(sum >= s){
// 			if(sum === s){
// 				minLen = Math.min(minLen, (right - left+1))
// 			}
// 			sum -= nums[left]
// 			left++
// 		}
// 		right++
// 	}
// 	return minLen
// }

var minSubArrayLen = function(s, nums) {
    let left = 0
    let right = 0
    let sum = 0
    let minLen = Infinity
    
    while(right < nums.length){
        sum += nums[right]
        while(sum >= s ){
            if(minLen > (right -left)){
                minLen = right - left +1
            }
			sum -= nums[left]
            left++
        }
        right++
	}
	if(minLen !== Infinity){
		return minLen
	}
    return 0
};

console.log(minSubArrayLen(11,[1,2,3,4,5]))