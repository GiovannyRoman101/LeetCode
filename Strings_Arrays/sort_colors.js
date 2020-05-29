/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	let white = 0
	let red = 0
	let blue = 0

	for(let number of nums){
		if(number === 0){
			white++
		}else if(number === 1){
			red++
		}else if(number === 2){
			blue++
		}
	}
	for(let i =0 ; i < white; i++){
		nums[i] = 0
	}
	for(let i = white ; i < white + red; i++){
		nums[i] = 1
	}
	for(let i = white + red ; i < white + red + blue; i++){
		nums[i] = 2
	}
}

let colors = [2, 0, 2, 1, 1, 0]
sortColors(colors)
console.log(colors)
