/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
	let num = 1
	while(num <= n){
		if(num === n){
			return true
		}
		if(num < n){
			num = num << 1
		}
	}
	return false
};

console.log(isPowerOfTwo(0))