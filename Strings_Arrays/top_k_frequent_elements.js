/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	let map = {}
	for(let number of nums){
		if(map[number] === undefined){
			map[number] = 0
		}
		map[number] = map[number] +1
	}
	
	let result = []
	for(let key in Object.keys(map)){
		if(map[key] >= k){
			result.push(parseInt(key))
		}
	}
	
	if(result.length ===0){
		let sorted = Object.keys(map)
		sorted.sort((a,b)=>{
			return parseInt(b)-parseInt(a)
		})
		return sorted[0]
	}
	return result
};

let nums =[1,1,1,2,2,3]
let nums1 =[1]
console.log(topKFrequent(nums1,1))