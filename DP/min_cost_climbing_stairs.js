/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost.length <=1){
		return 0
	}else{
		return Math.min(cost.pop()+ minCostClimbingStairs([...cost]), cost.pop()+ minCostClimbingStairs([...cost]))
	}
}

var minCostClimbingStairs2 = function(cost) {
	let n = cost.length
	if(n < 1){
		return 0
	}else if(n === 1){
		return cost[0]
	}
	let memo = []
	memo[0] = cost[0]
	memo[1] = cost[1]
	for(let i = 2; i < n; i++){
		memo[i] = Math.min(memo[i-1]+ cost[i], memo[i-2] + cost[i])
	}
	return Math.min(memo[n-1], memo[n-2])
}

let arr1 = [10]
let arr2 = [1,100,1,1,1,100,1,1,100,1]

console.log(minCostClimbingStairs2(arr1))
console.log(minCostClimbingStairs2(arr2))