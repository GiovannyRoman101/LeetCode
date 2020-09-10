/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
	let result = []
	for(let i = 0; i < nums1.length;i++){
		for(let j = 0; j < nums2.length; j++){
			result.push([nums1[i],nums2[j]])
		}
	}
	result.sort((a,b)=>{
		return (a[0] + a[1]) - (b[0]+b[1])
	})
	return result.slice(0,k)
}
var kSmallestPairs1 = function(nums1, nums2, k) {
	let result = []
	while(nums1.length !== 0 && nums2.length !==0){
		let temp = null
		if(nums1[0] < nums2[0]){
			temp = nums1.shift()
			for(let i = 0; i < nums2.length; i++){
				result.push([temp,nums2[i]])
			}
		}else{
			temp = nums2.shift()
			for(let i = 0; i < nums1.length; i++){
				result.push([temp,nums1[i]])
			}
		}
	}
	
	return result.slice(0,k)
}

console.log(kSmallestPairs1([1,7,11],[2,4,6],3))
console.log(kSmallestPairs1([1,1,2],[1,2,3],2))
console.log(kSmallestPairs1([1,2],[3],3))