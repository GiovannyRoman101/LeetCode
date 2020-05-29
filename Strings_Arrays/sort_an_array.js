/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums)
};

function mergeSort(arr){
	if(arr.length <= 1){
		return arr
	}
	let mid = Math.floor(arr.length/2)
	let left = mergeSort(arr.slice(0,mid))
	let right = mergeSort(arr.slice(mid))
	return mergeArrays(left, right)
}

function mergeArrays(arr1, arr2) {
	let result = []
	while ( arr1.length !== 0 && arr2.length !== 0) {
		if (arr1[0] < arr2[0]) {
			result.push(arr1.shift())
		} else {
			result.push(arr2.shift())
		}
	}
	if (0 === arr1.length) {
		result.push(...arr2)
	} else {
		result.push(...arr1)
	}
	return result
}

let arr = [5,2,3,1]

console.log(sortArray(arr))