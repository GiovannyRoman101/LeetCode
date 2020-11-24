/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
	let arr =[]
	for(let i =0; i < n; i++){
		arr.push(start)
		start +=2
	}
	let res = arr.pop()
	while(arr.length !== 0){
		res = res ^ arr.pop()
	}
	return res
};

console.log(xorOperation(10,5))