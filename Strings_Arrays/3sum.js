// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function threeSum(nums) {
    let result = []
    nums.sort((a,b)=>{ return a - b})
    for(let i = 0; i < nums.length; i++){
        // never let i refer to the same value twice
        if(i !== 0 && nums[i] === nums[i-1]){
            continue
        }
        let j = i+1
        let k = nums.length -1
        while(j < k){
            let sum = nums[i]+nums[j]+nums[k]
            if(sum ===0){
                result.push([nums[i],nums[j],nums[k]])
                j++
                while(j< k && nums[j] === nums[j-1]){
                    j++
                }
            } else if(sum < 0){
                j++
            }
            else{
                k--
            }
        }
    }
    return result
}

let arr = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(arr))