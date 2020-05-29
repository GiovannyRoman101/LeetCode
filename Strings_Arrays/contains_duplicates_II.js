/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	let map = new Map()
	for(let i = 0; i < nums.length; i++){
		if(map[nums[i]] !== undefined){
			if(i - map[nums[i]] <= k ){
				return true
			}
		}
		map[nums[i]] = i
	}
	return false
};


var containsNearbyDuplicate1 = function(nums, k) {
	for(let i = 0; i < nums.length; i++){
		for(let j =1; j <= k ; j++){
			if(nums[i] === nums[i+j]){
				return true
			}
		}
	}
	return false
};

let arr1 = [1,2,3,1]
let k1 = 3
let arr2 = [1,0,1,1]
let k2 = 1
let arr3 = [1,2,3,1,2,3]
let k3 = 2

console.log(containsNearbyDuplicate(arr1,k1))
console.log(containsNearbyDuplicate(arr2,k2))
console.log(containsNearbyDuplicate(arr3,k3))

console.log(containsNearbyDuplicate1(arr1,k1))
console.log(containsNearbyDuplicate1(arr2,k2))
console.log(containsNearbyDuplicate1(arr3,k3))