/**
 * @param {number[]} height
 * @return {number}
 */

 // uses dynamic programming 
var trap = function(height) {
    if(height === null){
		return 0
	}
	let sum = 0
	let left_max = []
	let right_max = []
	left_max[0]= height[0]
	for(let i = 1; i < height.length; i++){
		left_max[i] = Math.max(left_max[i-1],height[i])
	}
	right_max[height.length-1] = height[height.length-1]
	for(let i = height.length -2; i >=0; i--){
		right_max[i] = Math.max(height[i], right_max[i+1])
	}
	for(let i = 0; i <height.length; i++){
		sum += Math.min(left_max[i],right_max[i]) - height[i]
	}
	return sum
}

function trap_using_two_ptr(height){
	let left = 0
	let right = height.length -1
	let ans = 0
	let left_max = 0
	let right_max = 0
	while(left < right){
		if(height[left] < height[right]){
			height[left] >= left_max ? (left_max = height[left]):ans += (left_max - height[left])
			left++
		}else{
			height[right] >= right_max ? (right_max = height[right]):ans += (right_max - height[right])
			right--
		}
	}
	return ans
}

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
// console.log(trap([4,2,0,3,2,5]))

console.log(trap_using_two_ptr([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap_using_two_ptr([4,2,0,3,2,5]))