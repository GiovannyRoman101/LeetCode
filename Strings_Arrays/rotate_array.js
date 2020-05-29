/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	if(k > 0 && nums.length > 1){
		while( k > 0){
			nums.unshift(nums.pop())
			k--
		}
	}
};

let arr1 = [1,2,3,4,5,6,7]
let arr2 = [-1,-100,3,99]
let arr3 =[1,2]
// rotate(arr1,3)
// rotate(arr2,2)
rotate(arr3,1)

// console.log(arr1)
// console.log(arr2)
console.log(arr3)