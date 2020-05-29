/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
	let memo = []
	memo[0] = 1
	memo[1] = 10
	// t(n) = (t(n-1) - t(n-2))*(11-i) + t(n-1)

	if(n <= 1){
		return memo[n]
	}
	for(let i = 2; i <= n; i++){
		memo[i] = (memo[i-1] - memo[i-2]) * (11-i) + memo[i-1]
	}
	return memo[n]
};

console.log(countNumbersWithUniqueDigits(3))