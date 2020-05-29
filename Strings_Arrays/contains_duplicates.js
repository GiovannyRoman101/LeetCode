/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let map = new Map()
	for(let i of nums){
		if(map[i] === undefined){
			map[i] = 1
		}else {
			return true
		}
	}
	return false
};

let arr = [1,2,3,1]
let arr1 = [1,2,3,4]

console.log(containsDuplicate(arr1))