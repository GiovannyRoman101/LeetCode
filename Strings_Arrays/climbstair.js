var climbStairs = function(n) {
    let total =0
    let curr = 0
    
    function helper(currPos, end){
        if(currPos === end){
            total++
        }else if (currPos > end){
            return
        }else{
            helper(currPos + 1, end)
            helper(currPos + 2, end)
        }
    }
    helper(curr, n)
    return total
};
// works but slow
// it is the fibinocci formula for all paths
console.log(climbStairs(44))