/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let max = Math.pow(2,31)-1
    let min = Math.pow(2,-31)
    if(dividend > max || divisor > max){
        return max
    }
    if(dividend < min || divisor < min){
        return min
    }
    return Math.floor(dividend / divisor)
};

console.log(divide(10,-3))