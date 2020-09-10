/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let sorted = []
	while(nums1.length !== 0 && nums2.length !== 0){
		if(nums1[0] > nums2[0]){
			sorted.push(nums2.shift())
		}else{
			sorted.push(nums1.shift())
		}
	}
	if(nums1.length === 0 && nums2.length !== 0){
		sorted.push(...nums2)
	}
	if(nums1.length !== 0 && nums2.length === 0){
		sorted.push(...nums1)
	}
	if(sorted.length %2 ===1){
		return sorted[Math.floor(sorted.length / 2)]
	}else{
		let mid = Math.floor(sorted.length / 2)
		return (sorted[mid] + sorted[mid -1] )/2
	}
};

console.log(findMedianSortedArrays([1,2],[3,4]))