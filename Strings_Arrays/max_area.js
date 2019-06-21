// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container 
// contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let maxarea = 0
    let left = 0
    let right = height.length-1
    while(left <=right){
        maxarea = Math.max(maxarea, Math.min(height[left], height[right]) *(right-left))
        if(height[left] < height[right]){
            left ++
        }else{
            right --
        }
    }
    return maxarea
}
let arr = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(arr))