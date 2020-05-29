/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
	let result = []
    if(n < 0 && n > 1000){
		return result
	}
	if(n %2 !== 0){
		result.push(0)
		n--
	}
	for(let i = 1; i <= (n/2) ; i++){
		result.push(i)
		result.push(-i)
	}
	return result
};

console.log(sumZero(5))