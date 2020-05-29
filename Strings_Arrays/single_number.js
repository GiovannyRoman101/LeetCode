/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()
	for(let i =0;i < nums.length ;i++){
		if(map.get(nums[i])=== undefined){
			map.set(nums[i],0)
		}
		map.set(nums[i], map.get(nums[i]) + 1)
	}
	
	for(let i of map.keys()){
		if(map.get(i) ===1){
			return i
		}
	}
    return -1
};

let arr = [2,2,1]
console.log(singleNumber(arr))