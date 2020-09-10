/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums === undefined || nums.length === 0) {
        return -1
    } else if (nums.length === 1) {
        return 0
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i - 1] === undefined && nums[i + 1] === undefined) {
                if (nums[i] > -Infinity && nums[i] > -Infinity) {
                    return i
                }
            }
            if (nums[i - 1] === undefined) {
                if (nums[i] > -Infinity && nums[i] > nums[i + 1]) {
                    return i
                }
            }
            if (nums[i + 1] === undefined) {
                if (nums[i] > nums[i - 1] && nums[i] > -Infinity) {
                    return i
                }
            }
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                return i
            }
        }
    }
    return -1
}
const findPeakElement1 = function(arr){
	let left = 0
	let right = arr.length -1
	while(left <= right){
		let mid = Math.floor((left+right)/2)
		if(arr[mid] < arr[mid+1]){
			left = mid+1
		}else if(arr[mid] > arr[mid-1]){
			right = mid -1
		}else{
			return mid
		}
	}
	return left
}
console.log(findPeakElement1([1, 2, 1, 3, 5, 6, 4]))
