/**
 * @param {number} n
 * @return {number}
 */

// not optimized
var lastRemaining1 = function(n) {
	let nums = []
	let removeDir = false
	for(let i =1; i <= n; i++){
		nums.push(i)
	}
	while(nums.length !== 1){
		if(!removeDir){
			for(let i = 0; i < nums.length; i++){
				if(nums.length ===1){
					break
				}
				nums.splice(i,1)
			}
			removeDir = !removeDir
		}else{
			for(let i = nums.length-1; i >= 0; i--){
				if(nums.length ===1){
					break
				}
				nums.splice(i,1)
				i--
			}
			removeDir = !removeDir
		}
	}
	return nums.pop()
}
// 2 pointers remove left and right then when they meet, thats the remaining number
function lastRemaining(n){
	let left = 1
	let right = n

	let remaining = n
	let step = 1
	isForward = true

	while(left < right){
		if(isForward){
			left += step
			if(remaining %2 !== 0){
				right -= step
			}
		}else{
			right -= step
			if(remaining %2 !== 0){
				left += step
			}
		}
		isForward = !isForward
		step *= 2
		remaining = Math.floor(remaining/2)
	}
	return left
}

console.log(lastRemaining(9))