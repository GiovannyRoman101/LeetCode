/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let zeros = 0
    let max = 0
    let count = 0
    let left = 0
    let right = 0
    while (right < A.length) {
        if (A[right] === 1) {
            count++
        } else if (zeros < K) {
            count++
            zeros++
        } else {
            if (max < count) {
                max = count
            }
            while (left <= right) {
                if (A[left] === 1) {
                    left++
                    count--
                } else {
                    left++
                    break
                }
            }
        }
        right++
    }
    if (max < count) {
        max = count
    }
    return max
}

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
