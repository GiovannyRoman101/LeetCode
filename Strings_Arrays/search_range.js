// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let res = []
    let ind = 0
    while (ind < nums.length ) {
        if (nums[ind] === target) {
            res.push(ind)
        } 
        
        ind++
    }
    if(res.length === 0){
        return [-1,-1]
    }
    return [res[0],res[res.length-1]]
}

let arr = [2]
console.log(searchRange(arr, 2))