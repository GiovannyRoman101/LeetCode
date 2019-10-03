/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let neg = false
	let res = []
	if(x < 0){
		neg = true
		x = x* -1
	}
	while (x > 0){
		res.push(x %10)
		x = Math.floor(x /10)
	}
	
	if(neg){
		res = -1 * res.join('')
	}else{
		res = 1 * res.join('')
	}
	if(res > (Math.pow(2,31) - 1) || res < (Math.pow(-2,31))){
		return 0
	}
	return res
}

console.log(reverse(136469))

