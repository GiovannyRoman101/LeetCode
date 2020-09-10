var majorityElement = function(nums) {
    let result =[]
    let limit = Math.floor(nums.length/3)
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) === undefined){
            map.set(nums[i],0)
        }
        map.set(nums[i],map.get(nums[i])+1)
    }
    for(let key of map.keys()){
        if(map.get(key) > limit){
            result.push(key)
        }
    }
    return result
};

console.log(majorityElement([3,2,3]))